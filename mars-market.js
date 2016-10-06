const Socket = require('./socket')
const Cord = require('./cord')
const Laptop = require('./laptop')

const socket = new Socket('MARS', 120, 15)
const cord = new Cord('MARS')
const laptop = new Laptop(cord)

laptop.cord.plugInto(socket)

laptop.powerOn()
