
class Laptop
{
    constructor (cord) {
        this.brand = 'Banana'
        this.model = 'GrandNaine Pro'
        this.os = 'grandOS 42 "Uritorco"'
        this.cord = cord
    }

    attachCord (cord) {
        this.cord = cord
    }

    powerOn () {
        if (!this.cord.hasCharge()) {
            throw new Error('No electricity! Am I plugged in? :(')
        }

        console.log(`Beep-Boop, ${this.brand} ${this.model} running!`)
        console.log(`${this.os} booting up...`)
    }
}

module.exports = Laptop
