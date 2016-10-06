const Laptop = require('../components/laptop')

const register = container => {
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
}

module.exports = { register }
