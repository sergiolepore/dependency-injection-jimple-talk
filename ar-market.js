const Socket = require('./socket')
const Laptop = require('./laptop')

const socket = new Socket('I', 220, 15)
const laptop = new Laptop('AR')

socket.plug(laptop.cord)

laptop.powerOn()
