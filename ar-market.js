const Socket = require('./socket')
const LaptopFactory = require('./laptop-factory')

const socket = new Socket('I', 220, 15)
const laptop = LaptopFactory.createLaptop('I')

socket.plug(laptop.cord)

laptop.powerOn()
