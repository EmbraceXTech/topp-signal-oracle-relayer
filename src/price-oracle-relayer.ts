import {ethers} from "ethers";

import { SimplePriceOracle__factory } from "../typechain-types/factories/contracts/oracle/SimplePriceOracle__factory";
import { BitkubAPI } from "./bitkub-api";
import config from "../config";

export class PriceOracleRelayer {

    private readonly bitkubAPI = new BitkubAPI();

    public async run() {
        // Initialize ethers contract and provider
        const provider = new ethers.JsonRpcProvider(config.rpcUrl);
        const wallet = new ethers.Wallet(config.privateKey, provider);
        const oracleContract = new ethers.Contract(
            config.priceOracleContractAddress,
            SimplePriceOracle__factory.abi,
            wallet
        );

        console.log("Subscribing to PriceRequested events...");
        // Subscribe to PriceRequested events
        oracleContract.on("PriceRequested", async (time: BigInt) => {
            try {
                console.log(`Received price request for ${time}`);
                
                const price = await this.bitkubAPI.getCurrentPriceUSD("KUB");

                const priceInWei = ethers.parseEther(price.toString());
                
                // Call fulfillPrice function on smart contract
                const tx = await oracleContract.fulfillPrice(time, priceInWei);
                await tx.wait();
                
                console.log(`Price fulfilled for request ${time}: ${price} USD`);
            } catch (error) {
                console.error(`Error processing price request ${time}:`, error);
            }
        });

        console.log("Price Oracle Relayer is running and listening for events...");

    }
}