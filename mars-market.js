const Socket = require('./socket')
const Cord = require('./cord')
const Laptop = require('./laptop')

const socket = new Socket('MARS', 120, 15)
const cord = new Cord('MARS')
const laptop = new Laptop(cord)

socket.plug(laptop.cord)

laptop.powerOn()
