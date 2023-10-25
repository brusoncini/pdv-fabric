const joi = require('joi')
const mensagensErro = require('../utilidades/mensagensErro')

const esquemaCliente = joi.object({
    nome: joi.string().pattern(/[\p{L}]+/u).required().messages({
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
    }),
    cep: joi.number().messages({
        'number.base': mensagensErro.numeroInvalido,
    }),

    rua: joi.string().messages({
        'string.empty': mensagensErro.campoInvalido
    }),

    numero: joi.number().messages({
        'number.base': mensagensErro.numeroInvalido,
        'number.integer': mensagensErro.numeroInvalido

    }),
    cidade: joi.string().messages({
        'string.empty': mensagensErro.campoInvalido
    }),
    bairro: joi.string().messages({
        'string.empty': mensagensErro.campoInvalido
    }),

    estado: joi.string().max(2).messages({
        'string.empty': mensagensErro.campoInvalido,
        'string.max': "Forneça apenas as siglas do Estado",
    })
})

module.exports = esquemaCliente