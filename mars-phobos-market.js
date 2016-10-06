const Socket = require('./socket')
const Cord = require('./cord')
const LaptopFactory = require('./laptop-factory')

const laptop = LaptopFactory.createLaptop('MARS')

// Somehow we've put a base on Phobos but requires a different outlet,
// and the laptop megafactory has not updated its production line yet...
// We can bring a laptop from mars and attach it a custom cord,
// it should work... Right?
const socket = new Socket('MARS-PHOBOS', 120, 15)
const customCord = new Cord('MARS-PHOBOS')

laptop.attachCord(customCord)

socket.plug(laptop.cord)

laptop.powerOn()
