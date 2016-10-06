const Cord = require('./cord')
const Laptop = require('./laptop')

class LaptopFactory
{
    static createLaptop (outletType) {
        const cord = new Cord(outletType)
        const laptop = new Laptop(cord)

        return laptop
    }
}

module.exports = LaptopFactory
