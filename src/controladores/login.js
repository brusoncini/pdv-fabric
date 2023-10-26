const knex = require('../conexao')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaHash = require("../senhaHash");

const login = async (req, res) => {
   const { email, senha } = req.body;


   try {

      const usuario = await knex('usuarios').where({ email }).first();

      if (!usuario) {
         return res
            .status(401)
            .json({ mensagem: "E-mail e/ou senha inválido(s)." });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
         return res
            .status(401)
            .json({ mensagem: "E-mail e/ou senha inválido(s)." });
      }

      const token = jwt.sign({ id: usuario.id }, senhaHash, {
         expiresIn: "8h",
      });

      const { senha: _, ...usuarioLogado } = usuario;

      return res.json({ usuario: usuarioLogado, token });
   } catch (error) {
      return res.status(500).json(error.message);
   }
};

module.exports = {
   login
}