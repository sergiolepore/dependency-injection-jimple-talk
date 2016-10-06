
class TypeBCord
{
    constructor () {
        this.type = 'B'
        this.volts = 0
        this.amps = 0
    }

    hasCharge () {
        return !!this.volts && !!this.amps
    }

    plugInto (socket) {
        if (this.type !== socket.type) {
            throw new Error(`Incompatible type. Cord: ${this.type}, Socket: ${socket.type}`)
        }

        this.volts = socket.volts
        this.amps = socket.amps
    }

    unplug () {
        this.volts = 0
        this.amps = 0
    }
}

module.exports = TypeBCord
