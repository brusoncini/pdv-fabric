const knex = require("../conexao");
const bcrypt = require("bcrypt");
const registrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(401).json({ mensagem: "O campo nome é obrigatório" });
    }

    if (!email) {
        return res.status(401).json({ mensagem: "O campo email é obrigatório" });
    }

    if (!senha) {
        return res.status(401).json({ mensagem: "A senha é obrigatória" });
    }

    try {
        const emailExistente = await knex('usuarios').where({ email }).first();

        if (emailExistente) {
            return res.status(400).json({ mensagem: "Já existe usuário cadastrado com o e-mail informado." });
        }

        const encryptedPassword = await bcrypt.hash(senha, 10);

        const novoUsuario = {
            nome,
            email,
            senha: encryptedPassword,
        };

        const [usuario] = await knex('usuarios').insert(novoUsuario).returning('*');

        delete usuario.senha;

        return res.status(201).json(usuario);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};

const perfilUsuario = async (req, res) => {
    return res.status(200).json(req.usuario)
}



module.exports = {
    registrarUsuario,
    perfilUsuario
}