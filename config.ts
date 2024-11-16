import dotenv from "dotenv";

dotenv.config();

const config = {
    rpcUrl: process.env.RPC_URL || "",
    privateKey: process.env.PRIVATE_KEY || "",
    priceOracleContractAddress: process.env.PRICE_ORACLE_CONTRACT_ADDRESS || "",
    randomOracleContractAddress: process.env.RANDOM_ORACLE_CONTRACT_ADDRESS || "",
}

export default config;