const { Joi } = require('express-validation')
    //VALIDATIONS
const idValidation = {
    params: Joi.object({
        id: Joi.string()
            .required()
    }),
}

module.exports = idValidation