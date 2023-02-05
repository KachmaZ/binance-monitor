import { defineStore } from 'pinia';

interface OrderBook {
    lastUpdateId: number,
    bids: [],
    asks: [],
}

export const useOrderBookStore = defineStore('book', {
    state: () => ({
        orderBook: {
            lastUpdateId: 0,
            bids: [],
            asks: [],
        } as OrderBook
    }),
    getters: {
        getBook: (state) => {
            return state.orderBook
        }
    },
    actions: {
        async init() {
            fetch('https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=10')
                .then(response => {
                    if (!response.ok) {

                    }
                    return response.json<{ data: OrderBook }>()
                })
                .then(data => {
                    this.orderBook = data
                })
        }
    }
})