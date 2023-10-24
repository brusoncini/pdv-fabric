const joi = require('joi')
const mensagensErro = require('../utilidades/mensagensErro')

const esquemaUsuario = joi.object({
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

    senha: joi.string().required().messages({
        'any.required': mensagensErro.obrigatorio,
        'string.empty': mensagensErro.obrigatorio
    })
})

module.exports = esquemaUsuario