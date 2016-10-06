const Socket = require('./socket')
const Cord = require('./cord')
const Laptop = require('./laptop')

const socket = new Socket('I', 220, 15)
const cord = new Cord('I')
const laptop = new Laptop()
laptop.attachCord(cord)

// alternative:
// const laptop = new Laptop(cord)

socket.plug(laptop.cord)

laptop.powerOn()
