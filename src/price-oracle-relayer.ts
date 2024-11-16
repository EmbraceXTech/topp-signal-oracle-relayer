import {ethers} from "ethers";

import { SimplePriceOracle__factory } from "../typechain-types/factories/contracts/oracle/SimplePriceOracle__factory";
import { BitkubAPI } from "./bitkub-api";

export class PriceOracleRelayer {

    private readonly bitkubAPI = new BitkubAPI();

    public async run() {
        // Initialize ethers contract and provider
        const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
        const oracleContract = new ethers.Contract(
            process.env.ORACLE_CONTRACT_ADDRESS!,
            SimplePriceOracle__factory.abi,
            wallet
        );

        // Subscribe to PriceRequest events
        oracleContract.on("PriceRequest", async (requestId: string, symbol: string) => {
            try {
                console.log(`Received price request for ${symbol} with ID ${requestId}`);
                
                const price = await this.bitkubAPI.getCurrentPrice(symbol);
                
                // Convert price to proper decimal format for contract
                const priceInWei = ethers.parseUnits(price.toString(), 8);
                
                // Call fulfillPrice function on smart contract
                const tx = await oracleContract.fulfillPrice(requestId, priceInWei);
                await tx.wait();
                
                console.log(`Price fulfilled for request ${requestId}: ${price} THB`);
            } catch (error) {
                console.error(`Error processing price request ${requestId}:`, error);
            }
        });

        console.log("Price Oracle Relayer is running and listening for events...");

    }
}