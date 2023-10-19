const knex = require("../conexao");

const listarCategorias = async (req, res) => {
    try {
        const categorias = await knex('categorias').select('descricao');

        if (categorias.length === 0) {
            return res.status(200).json([]);
        }

        return res.status(200).json(categorias);
    } catch (error) {
        console.error('Erro ao listar categorias:', error);
        return res.status(500).json(error.message);
    }
};
module.exports = {
    listarCategorias
}