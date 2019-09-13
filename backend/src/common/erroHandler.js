const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        const  errors = parseErros(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErros = (nodeRestFulErrors) => {
    const errors = []
    _.forIn(nodeRestFulErrors, error => errors.push(error.message))

    return errors
}