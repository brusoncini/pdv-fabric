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

    //tem algum erro apenas nessa parte de categoria_id... vou ver com calma depois
    categoria_id: joi.number().required().min(1).max(9).message({
        'any.required': mensagensErro.obrigatorio,
        'number.base': mensagensErro.msgCategoriaId,
        'number.max': mensagensErro.msgCategoriaId,
        'number.min': mensagensErro.msgCategoriaId

    })
})

module.exports = esquemaProduto