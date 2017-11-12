/**
 * tele-bitcoin-wallet
 * Mohammed Sohail <sohail@forfuture.tech>
 *
 * A Bitcoin wallet For Telegram
 */

exports = module.exports = {
    app: {
        port: 80
    },
    blocktrail: {
        apiKey: "0152d0719eb75a5f78e5c59781c778a434cd5709",
        apiSecret: "bdb46518d0be7256c08035484cbb5aec63aba9b8",
        network: "tBTC",
        testnet: true
    },
    mau: {
        ttl: 120000
    },
    telegram: {
        token: "419197408:AAEUh7_-ee7qlrk2AzU1ZIr0d3mabZSWYcA",
        administrators: [
            { "user": 295372769 },
            { "user": 0 },
            { "user": 0 }
        ],
        channel: "295372769"
    },
    wallet: {
        name: "GunbotTest",
        pass: "GunbotTest",
    }
}
