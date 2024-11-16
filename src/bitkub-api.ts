import axios from "axios";

export class BitkubAPI {
    private readonly baseUrl = "https://api.bitkub.com/api";

    /**
     * Gets the current price for a given symbol pair from Bitkub
     * @param symbol The trading symbol (e.g. "BTC", "ETH")
     * @returns The current price in THB
     */
    public async getCurrentPrice(symbol: string): Promise<number> {
        try {
            const response = await axios.get(`${this.baseUrl}/market/ticker?sym=${symbol}_THB`);
            const price = response.data[`${symbol}_THB`].last;
            return price;
        } catch (error) {
            console.error(`Error fetching price for ${symbol}:`, error);
            throw error;
        }
    }

    /**
     * Gets the order book for a given symbol pair from Bitkub
     * @param symbol The trading symbol (e.g. "BTC", "ETH") 
     * @param limit Number of orders to return (default 20)
     * @returns The order book data
     */
    public async getOrderBook(symbol: string, limit: number = 20): Promise<any> {
        try {
            const response = await axios.get(`${this.baseUrl}/market/books?sym=${symbol}_THB&lmt=${limit}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching order book for ${symbol}:`, error);
            throw error;
        }
    }

    /**
     * Gets recent trades for a given symbol pair from Bitkub
     * @param symbol The trading symbol (e.g. "BTC", "ETH")
     * @param limit Number of trades to return (default 20)
     * @returns Recent trade data
     */
    public async getRecentTrades(symbol: string, limit: number = 20): Promise<any> {
        try {
            const response = await axios.get(`${this.baseUrl}/market/trades?sym=${symbol}_THB&lmt=${limit}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching recent trades for ${symbol}:`, error);
            throw error;
        }
    }
}
