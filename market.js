const Jimple = require('jimple')
const providers = require('./providers')

const container = new Jimple()

Object.keys(providers).map(key => providers[key]).forEach(provider => {
    container.register(provider)
})

const market = process.env.MARKET || 'us'
let socket
let laptop

if (container.has(`${market}_socket`) && container.has(`${market}_laptop`)) {
    // MARKET=us node market.js
    socket = container.get(`${market}_socket`)
    laptop = container.get(`${market}_laptop`)
} else {
    // MARKET=phobos SOCKET_TYPE='MARS-PHOBOS' VOLTS=120 AMPS=15 node market.js
    const Cord = container.get('generic_cord')
    const Socket = container.get('generic_socket')
    socket = new Socket(process.env.SOCKET_TYPE, process.env.VOLTS, process.env.AMPS)
    cord = new Cord(process.env.SOCKET_TYPE)
    laptop = container.get('generic_laptop')
    laptop.attachCord(cord)
}

laptop.location = market
laptop.cord.plugInto(socket)

laptop.powerOn()
