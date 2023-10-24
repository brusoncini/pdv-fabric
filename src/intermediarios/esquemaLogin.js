const joi = require('joi')
const mensagensErro = require('../utilidades/mensagensErro')

const esquemaLogin = joi.object({
    email: joi.string().email().required().messages({
        'string.email': mensagensErro.campoInvalido,
        'any.required': mensagensErro.obrigatorio,
        'string.empty': mensagensErro.obrigatorio
    }),

    senha: joi.string().required().messages({
        'any.required': mensagensErro.obrigatorio,
        'string.empty': mensagensErro.obrigatorio
    })
})

module.exports = esquemaLogin