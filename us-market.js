const TypeBSocket = require('./type-b-socket')
const UsLaptop = require('./us-laptop')

const socket = new TypeBSocket()
const laptop = new UsLaptop()

socket.plug(laptop.cord)

laptop.powerOn()
