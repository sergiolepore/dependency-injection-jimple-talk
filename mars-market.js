const Socket = require('./socket')
const LaptopFactory = require('./laptop-factory')

const socket = new Socket('MARS', 120, 15)
const laptop = LaptopFactory.createLaptop('MARS')

socket.plug(laptop.cord)

laptop.powerOn()
