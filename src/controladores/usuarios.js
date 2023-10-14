const knex = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaHash = require("../senhaHash");

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

const login = async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      if (!email || !senha) {
        return res
          .status(400)
          .json({ mensagem: "Campos obrigatórios não preenchidos." });
      }
  
      const usuario = await knex('usuarios').where('email', email).first();
  
      if (!usuario) {
        return res
          .status(401)
          .json({ mensagem: "Usuário e/ou senha inválido(s)." });
      }
  
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
  
      if (!senhaValida) {
        return res
          .status(401)
          .json({ mensagem: "Usuário e/ou senha inválido(s)." });
      }
  
      const token = jwt.sign({ id: usuario.id }, senhaHash, {
        expiresIn: "8h",
      });
  
      const { senha: _, ...usuarioLogado } = usuario;
  
      return res.json({ usuario: usuarioLogado, token });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
  };

module.exports = {
    registrarUsuario,
    perfilUsuario,
    login
}