
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

    supply (volts, amps) {
        this.volts = volts
        this.amps = amps
    }
}

module.exports = TypeBCord
