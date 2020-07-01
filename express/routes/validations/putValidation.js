const { Joi } = require('express-validation')
    //VALIDATIONS
const putValidation = {
    body: Joi.object({
        name: Joi.string()
            .min(3),
        year: Joi.number()
            .min(4)
            .max(4),
    }),
}

module.exports = putValidation