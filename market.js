const Jimple = require('jimple')
const Cord = require('./cord')
const Laptop = require('./laptop')
const Socket = require('./socket')

const container = new Jimple()

// common service, always cached/singleton
container.set('us_socket', () => {
    return new Socket('B', 120, 15)
})
container.set('ar_socket', () => {
    return new Socket('I', 220, 15)
})
container.set('mars_socket', () => {
    return new Socket('MARS', 120, 15)
})

container.set('b_cord', () => {
    return new Cord('B')
})
container.set('i_cord', () => {
    return new Cord('I')
})
container.set('mars_cord', () => {
    return new Cord('MARS')
})

// factory = always a new instance
container.set('generic_laptop', container.factory(c => {
    const brand = 'Banana'
    const model = 'GrandNaine Pro'
    const os = 'grandOS 42 "Uritorco"'
    return new Laptop(brand, model, os)
}))

container.set('us_laptop', container.factory(c => {
    const laptop = c.get('generic_laptop')
    const cord = c.get('b_cord')
    laptop.attachCord(cord)

    return laptop
}))
container.set('ar_laptop', container.factory(c => {
    const laptop = c.get('generic_laptop')
    const cord = c.get('i_cord')
    laptop.attachCord(cord)

    return laptop
}))
container.set('mars_laptop', container.factory(c => {
    const laptop = c.get('generic_laptop')
    const cord = c.get('mars_cord')
    laptop.attachCord(cord)

    return laptop
}))

// ---

const market = process.env.MARKET || 'us'
let socket
let laptop

if (container.has(`${market}_socket`) && container.has(`${market}_laptop`)) {
    // MARKET=us node market.js
    socket = container.get(`${market}_socket`)
    laptop = container.get(`${market}_laptop`)
} else {
    // MARKET=phobos SOCKET_TYPE='MARS-PHOBOS' VOLTS=120 AMPS=15 node market.js
    socket = new Socket(process.env.SOCKET_TYPE, process.env.VOLTS, process.env.AMPS)
    cord = new Cord(process.env.SOCKET_TYPE)
    laptop = container.get('generic_laptop')
    laptop.attachCord(cord)
}

laptop.location = market
laptop.cord.plugInto(socket)

laptop.powerOn()
