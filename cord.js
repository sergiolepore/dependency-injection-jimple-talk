
class Cord
{
    constructor (type) {
        this.type = type
        this.volts = 0
        this.amps = 0
    }

    hasCharge () {
        return !!this.volts && !!this.amps
    }

    supply (volts, amps) {
        this.volts = volts
        this.amps = amps
    }
}

module.exports = Cord
