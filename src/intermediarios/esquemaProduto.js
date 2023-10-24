const joi = require('joi')
const mensagensErro = require('../utilidades/mensagensErro')

const esquemaProduto = joi.object({
    descricao: joi.string().required().messages({
        'any.required': mensagensErro.obrigatorio,
        'string.empty': mensagensErro.obrigatorio,
    }),

    quantidade_estoque: joi.number().required().positive().messages({
        'any.required': mensagensErro.obrigatorio,
        'numer.positive': mensagensErro.numeroInvalido,
        'number.base': mensagensErro.numeroInvalido
    }),

    valor: joi.number().required().positive().integer().messages({
        'any.required': mensagensErro.obrigatorio,
        'numer.positive': mensagensErro.numeroInvalido,
        'number.base': mensagensErro.numeroInvalido,
        'number.integer': mensagensErro.numeroInvalido
    }),

    categoria_id: joi.number().required().min(1).max(9).messages({
        'any.required': mensagensErro.msgCategoriaId,
        'number.base': mensagensErro.msgCategoriaId,
        'number.max': mensagensErro.msgCategoriaId,
        'number.min': mensagensErro.msgCategoriaId

    })
})

module.exports = esquemaProduto