
class TypeBSocket
{
    constructor () {
        this.type = 'B'
        this.volts = 120
        this.amps = 15
        this.cord = null
    }

    plug (cord) {
        if (cord.type !== this.type) {
            throw new Error(`Incompatible type. Expected: ${this.type}, provided: ${cord.type}`)
        }

        if (this.cord) {
            this.unplug()
        }

        this.cord = cord
        this.cord.supply(this.volts, this.amps)
    }

    unplug () {
        if (!this.cord) {
            throw new Error('Nothing to unplug!')
        }

        this.cord.supply(0, 0)
        this.cord = null
    }
}

module.exports = TypeBSocket
