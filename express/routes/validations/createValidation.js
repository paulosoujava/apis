const { Joi } = require('express-validation')
    //VALIDATIONS
const courseValidation = {
    body: Joi.object({
        name: Joi.string()
            .min(3)
            .required(),
        year: Joi.string()
            .min(4)
            .max(4)
            .required(),
    }),
}

module.exports = courseValidation