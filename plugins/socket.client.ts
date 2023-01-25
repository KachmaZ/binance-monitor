export default defineNuxtPlugin(() => {
    let socket = new WebSocket(`wss://stream.binance.com:9443/ws/bnbbtc@depth`)
    
    return {
        provide: {
            socket,
        }
    }
})
