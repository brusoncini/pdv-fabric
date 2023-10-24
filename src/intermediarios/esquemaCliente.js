const joi = require('joi')
const mensagensErro = require('../utilidades/mensagensErro')

const esquemaCliente = joi.object({
    nome: joi.string().pattern(/^[A-Za-z\s]+$/).required().messages({
        'any.required': mensagensErro.obrigatorio,
        'string.empty': mensagensErro.obrigatorio,
        'string.pattern.base': mensagensErro.stringInvalida,
        'string.base': mensagensErro.stringInvalida
    }),

    email: joi.string().email().required().messages({
        'string.email': mensagensErro.campoInvalido,
        'any.required': mensagensErro.obrigatorio,
        'string.empty': mensagensErro.obrigatorio
    }),

    cpf: joi.string().regex(/^\d{11}$/).required().messages({
        'any.required': mensagensErro.obrigatorio,
        'string.empty': mensagensErro.obrigatorio,
        'string.pattern.base': mensagensErro.campoInvalido,
    })
})

module.exports = esquemaCliente