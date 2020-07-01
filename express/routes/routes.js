const express = require('express')
const { validate, ValidationError } = require('express-validation')



const routes = express.Router()


routes.get('/', (req, res) => {
    return res.json({
        method: "GET",
    })
})



routes.post('/login', validate(require('./validations/loginValidation')), (req, res) => {
    res.json(200)
})


routes.post('/create', validate(require('./validations/createValidation')), (req, res) => {
    return res.json({
        method: "POST",
    })
})
routes.put('/:id', validate(require('./validations/putValidation')), (req, res) => {
    return res.json({
        method: "PUT",
    })
})
routes.delete('/:id', validate(require('./validations/deleteValidation')), (req, res) => {
    return res.json({
        method: "DELETE",
    })
})


routes.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
})


module.exports = routes