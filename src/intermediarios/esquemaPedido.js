const joi = require('joi')
const mensagensErro = require('../utilidades/mensagensErro')

const esquemaPedido = joi.object({
    cliente_id: joi.number().integer().positive().required().messages({
        'number.base': mensagensErro.numeroInvalido,
        'number.integer': mensagensErro.numeroInvalido,
        'number.positive': mensagensErro.numeroInvalido,
        'any.required': mensagensErro.obrigatorio
    }),

    observacao: joi.string().optional().messages({
        'string.base': mensagensErro.stringInvalida
    }),
    pedido_produtos: joi.array().min(1).required().messages({
        'object.base': mensagensErro.bodyInvalido,
        'any.required': mensagensErro.obrigatorio,
        'array.min': mensagensErro.msgArrayMinimo
    })
})

module.exports = esquemaPedido
