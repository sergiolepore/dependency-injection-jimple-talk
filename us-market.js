const Socket = require('./socket')
const LaptopFactory = require('./laptop-factory')

const socket = new Socket('B', 120, 15)
const laptop = LaptopFactory.createLaptop('B')

laptop.cord.plugInto(socket)

laptop.powerOn()
