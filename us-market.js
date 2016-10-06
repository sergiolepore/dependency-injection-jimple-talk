const Socket = require('./socket')
const Laptop = require('./laptop')

const socket = new Socket('B', 120, 15)
const laptop = new Laptop('US')

laptop.cord.plugInto(socket)

laptop.powerOn()
