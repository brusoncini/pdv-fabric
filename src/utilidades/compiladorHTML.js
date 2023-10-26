const fs = require('fs/promises')
const handlebars = require('handlebars')

const compiladorHTML = async (arquivo, contexto) => {
    const html = await fs.readFile(arquivo)
    const compilador = handlebars.compile(html.toString())
    return compilador(contexto)
}

module.exports = compiladorHTML