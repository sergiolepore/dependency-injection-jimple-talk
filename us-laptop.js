const TypeBCord = require('./type-b-cord')

class UsLaptop
{
    constructor () {
        this.brand = 'Banana'
        this.model = 'GrandNaine Pro'
        this.os = 'grandOS 42 "Uritorco"'
        this.cord = new TypeBCord()
    }

    powerOn () {
        if (!this.cord.hasCharge()) {
            throw new Error('No electricity! Am I plugged on? :(')
        }

        console.log(`Beep-Boop, ${this.brand} ${this.model} running!`)
        console.log(`${this.os} booting up...`)
    }
}

module.exports = UsLaptop
