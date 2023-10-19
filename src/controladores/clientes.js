const knex = require("../conexao");


const listarCliente = async (req, res) => {
    const { usuario } = req;

    try {

        const clientes = await knex('clientes').where({ usuario_id: usuario.id }).returnig("*");

        if (!clientes) {
            return res.status(404).json({ mensagem: " cliente não encontrado" });
        }
        return res.status(200).json(clientes);

    } catch (error) {

        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }


};

module.exports = {
    listarCliente
}

