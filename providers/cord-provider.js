const Cord = require('../components/cord')

const register = container => {
    container.set('generic_cord', (() => {
        return Cord
    }))

    container.set('b_cord', c => {
        const GenericCord = c.get('generic_cord')
        return new GenericCord('B')
    })

    container.set('i_cord', c => {
        const GenericCord = c.get('generic_cord')
        return new GenericCord('I')
    })

    container.set('mars_cord', c => {
        const GenericCord = c.get('generic_cord')
        return new GenericCord('MARS')
    })
}

module.exports = { register }
