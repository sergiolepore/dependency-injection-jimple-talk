const Socket = require('./socket')
const Laptop = require('./laptop')

const socket = new Socket('MARS', 120, 15)
const laptop = new Laptop('MARS')

laptop.cord.plugInto(socket)

laptop.powerOn()
