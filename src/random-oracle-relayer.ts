import {ethers} from "ethers";
import { SimpleRandomOracle__factory } from "../typechain-types/factories/contracts/oracle/SimpleRandomOracle__factory";
import config from "../config";

export class RandomOracleRelayer {
    public async run() {
        // Initialize ethers contract and provider
        const provider = new ethers.JsonRpcProvider(config.rpcUrl);
        const wallet = new ethers.Wallet(config.privateKey, provider);
        const oracleContract = SimpleRandomOracle__factory.connect(config.randomOracleContractAddress, wallet);

        console.log("Subscribing to RandomRequested events...");
        // Subscribe to RandomRequested events
        oracleContract.on("RandomnessRequested" as any, async (time: bigint, amount: bigint) => {
            try {
                console.log(`Received random number request for ${time} with amount ${amount}`);
                
                // Generate random number between 0 and 2^256-1
                const randomBytes = Array.from({length: 32}, () => {
                    const randomBytesValue = ethers.randomBytes(32);
                    return ethers.toBigInt(randomBytesValue);
                });
                
                // Call fulfillRandom function on smart contract
                const tx = await oracleContract.fulfillRandomness(time, randomBytes);
                await tx.wait();

                console.log(`Random number fulfilled for request ${time}: ${randomBytes}`);
            } catch (error) {
                console.error(`Error processing random number request ${time}:`, error);
            }
        });

        console.log("Random Oracle Relayer is running and listening for events...");
    }
}