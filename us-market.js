const Socket = require('./socket')
const Cord = require('./cord')
const Laptop = require('./laptop')

const socket = new Socket('B', 120, 15)
const cord = new Cord('B')
const laptop = new Laptop(cord)

// alternative:
// const laptop = new Laptop()
// laptop.attachCord(cord)

laptop.cord.plugInto(socket)

laptop.powerOn()
