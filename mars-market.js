const Socket = require('./socket')
const LaptopFactory = require('./laptop-factory')

const socket = new Socket('MARS', 120, 15)
const laptop = LaptopFactory.createLaptop('MARS')

laptop.cord.plugInto(socket)

laptop.powerOn()
