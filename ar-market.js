const TypeISocket = require('./type-i-socket')
const UsLaptop = require('./us-laptop')

const socket = new TypeISocket()
const laptop = new UsLaptop()

socket.plug(laptop.cord)

laptop.powerOn()
