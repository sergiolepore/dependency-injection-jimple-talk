const Cord = require('./cord')

class Laptop
{
    constructor (market) {
        this.brand = 'Banana'
        this.model = 'GrandNaine Pro'
        this.os = 'grandOS 42 "Uritorco"'
        this.cordTypes = new Map()
        this.marketSocketTypes = new Map()
        this.cordTypes.set('B', new Cord('B'))
        this.cordTypes.set('I', new Cord('I'))
        this.marketSocketTypes.set('AR', 'I')
        this.marketSocketTypes.set('US', 'B')

        this.cord = this.cordTypes.get(
            this.marketSocketTypes.get(market)
        )
    }

    powerOn () {
        if (!this.cord.hasCharge()) {
            throw new Error('No electricity! Am I plugged on? :(')
        }

        console.log(`Beep-Boop, ${this.brand} ${this.model} running!`)
        console.log(`${this.os} booting up...`)
    }
}

module.exports = Laptop
