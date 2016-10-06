const Cord = require('./cord')

class CordProvider
{
    static get marketSocketTypes () {
        return {
            AR: 'I',
            US: 'B',
            FR: 'E',
            IL: 'H'
        }
    }

    static getCordForMarket (market) {
        const socketType = CordProvider.marketSocketTypes[market]

        if (!socketType) {
            throw new Error(`We do not sell laptops for the market ${market}`)
        }

        return new Cord(socketType)
    }
}

module.exports = CordProvider
