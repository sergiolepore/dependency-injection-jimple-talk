const TypeBSocket = require('./type-b-socket')

class UsLaptop
{
    constructor () {
        this.brand = 'Banana'
        this.model = 'GrandNaine Pro'
        this.os = 'grandOS 42 "Uritorco"'
        this.socket = new TypeBSocket()
        this.cord = {
            volts: 0,
            amps: 0,
            type: 'B'
        }
    }

    plug () {
        this.cord.volts = this.socket.volts
        this.cord.amps = this.socket.amps
    }

    powerOn () {
        this.plug()

        console.log(`Beep-Boop, ${this.brand} ${this.model} running!`)
        console.log(`${this.os} booting up...`)
    }
}

module.exports = UsLaptop
