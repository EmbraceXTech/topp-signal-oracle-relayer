import { PriceOracleRelayer } from "./src/price-oracle-relayer";
import { RandomOracleRelayer } from "./src/random-oracle-relayer";

async function main() {
    const priceRelayer = new PriceOracleRelayer();
    await priceRelayer.run();
    const randomRelayer = new RandomOracleRelayer();
    await randomRelayer.run();
}

main();
