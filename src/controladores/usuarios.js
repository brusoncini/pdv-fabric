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
    const emailExistente = await knex("usuarios").where({ email }).first();

    if (emailExistente) {
      return res.status(400).json({
        mensagem: "Já existe usuário cadastrado com o e-mail informado.",
      });
    }

    if (!email) {
        return res.status(401).json({ mensagem: "O campo email é obrigatório" });
    }
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = {
      nome,
      email,
      senha: senhaCriptografada ,
    };

    const [usuario] = await knex("usuarios").insert(novoUsuario).returning("*");

    delete usuario.senha;

    return res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const perfilUsuario = async (req, res) => {
  return res.status(200).json(req.usuario);
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    if (!email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Campos obrigatórios não preenchidos." });
    }

    const emailExiste = await knex('usuarios').where('email', email).first();

    if (!emailExiste) {
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
    console.error(error.message);
    return res.status(500).json(error.message);
  }
};

const editarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.usuario;

  if (!nome && !email && !senha) {
    return res.status(400).json({
      Mensagem: "É obrigatório informar ao menos um campo para atualização.",
    });
  }

  try {
    const body = {};

    if (nome) {
      body.nome = nome;
    }
    if (email) {
      if (email !== req.usuario.email) {
        const verificaEmail = await knex("usuarios")
          .where({ email })
          .count("id as count")
          .first();

        if (verificaEmail.count > 0) {
          return res.status(400).json("O email já está cadastrado");
        }
      }
      body.email = email;
    }

    if (senha) {
      body.senha = await bcrypt.hash(senha, 10);
    }

    const usuarioAtualizado = await knex("usuarios").where({ id }).update(body);

    if (!usuarioAtualizado) {
      return res.status(400).json("Não foi possível atualizar o usuário");
    }

    return res
      .status(200)
      .json({ Mensagem: "Usuário atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  registrarUsuario,
  perfilUsuario,
  login,
  editarUsuario,
};
