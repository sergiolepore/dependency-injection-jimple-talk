const Socket = require('./socket')
const Laptop = require('./laptop')

const socket = new Socket('B', 120, 15)
const laptop = new Laptop('US')

socket.plug(laptop.cord)

laptop.powerOn()
