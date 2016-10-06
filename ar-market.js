const Socket = require('./socket')
const LaptopFactory = require('./laptop-factory')

const socket = new Socket('I', 220, 15)
const laptop = LaptopFactory.createLaptop('I')

laptop.cord.plugInto(socket)

laptop.powerOn()
