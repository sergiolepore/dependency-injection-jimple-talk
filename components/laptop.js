
class Laptop
{
    constructor (brand, model, os, cord = null) {
        this.brand = brand
        this.model = model
        this.os = os
        this.cord = cord
        this.location = ''
    }

    attachCord (cord) {
        this.cord = cord
    }

    powerOn () {
        if (!this.cord.hasCharge()) {
            throw new Error('No electricity! Am I plugged in? :(')
        }

        console.log(`Beep-Boop, ${this.brand} ${this.model} running!`)
        console.log(`Location: ${this.location}`)
        console.log(`${this.os} booting up...`)
    }
}

module.exports = Laptop
