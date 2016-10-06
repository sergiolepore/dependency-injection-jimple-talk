const Socket = require('../components/socket')

const register = container => {
    container.set('generic_socket', (() => {
        return Socket
    }))

    container.set('us_socket', c => {
        const GenericSocket = c.get('generic_socket')
        return new GenericSocket('B', 120, 15)
    })

    container.set('ar_socket', c => {
        const GenericSocket = c.get('generic_socket')
        return new GenericSocket('I', 220, 15)
    })

    container.set('mars_socket', c => {
        const GenericSocket = c.get('generic_socket')
        return new GenericSocket('MARS', 120, 15)
    })
}

module.exports = { register }
