const knex = require("../conexao");
const enderecamento = require("../utilidades.js/enderecamento");

const registrarCliente = async (req, res) => {
  const { nome, email, cpf, cep, numero } = req.body;

  if (!nome) {
    return res
      .status(404)
      .json({ mensagem: "O nome do cliente deve ser informado." });
  }
  if (!email) {
    return res
      .status(404)
      .json({ mensagem: "O e-mail do cliente deve ser informado." });
  }
  if (!cpf) {
    return res
      .status(404)
      .json({ mensagem: "O CPF do cliente deve ser informado." });
  }
  if (cpf.length !== 11) {
    return res
      .status(404)
      .json({
        mensagem:
          "CPF inválido. Por favor, verifique se foi digitado corretamente",
      });
  }

  try {
    const emailExiste = await knex("clientes").where({ email }).first();

    if (emailExiste) {
      return res
        .status(404)
        .json({ mensagem: "O e-mail informado já existe." });
    }
    const cpfExiste = await knex("clientes").where({ cpf }).first();

    if (cpfExiste) {
      return res.status(404).json({ mensagem: "O CPF informado já existe." });
    }

    let rua, bairro, cidade, estado;
    if (cep) {
      const dadosEndereco = await enderecamento.obterEndereco(cep);

      if (!dadosEndereco || dadosEndereco.erro) {
        return res
          .status(404)
          .json({
            mensagem:
              "Endereço não encontrado. Tente novamente com um CEP válido.",
          });
      }

      rua = dadosEndereco.logradouro;
      bairro = dadosEndereco.bairro;
      cidade = dadosEndereco.localidade;
      estado = dadosEndereco.uf;
    }

    const cliente = await knex("clientes").insert({
      nome,
      email,
      cpf,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
    });

    if (!cliente) {
      return res
        .status(400)
        .json({ mensagem: "O cliente não foi cadastrado." });
    }

    return res
      .status(200)
      .json({ mensagem: "Cliente cadastrado com sucesso." });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const editarCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, email, cpf, cep, numero } = req.body;

  if (!nome) {
    return res.status(400).json({ Mensagem: "O nome é obrigatório" });
  }
  if (!email) {
    return res.status(400).json({ Mensagem: "O e-mail é obrigatório" });
  }
  if (!cpf) {
    return res.status(400).json({ Mensagem: "O CPF é obrigatório" });
  }

  try {
    const body = {};
    let rua, bairro, cidade, estado;

    if (nome) {
      body.nome = nome;
    }

    if (email) {
      const clienteExistente = await knex("clientes")
        .where({ email })
        .whereNot({ id: id })
        .first();

      if (clienteExistente) {
        return res
          .status(400)
          .json("O email já está cadastrado para outro cliente");
      }
      body.email = email;
    }

    if (cpf) {
      if (cpf.length !== 11) {
        return res.status(400).json({ Mensagem: "CPF inválido" });
      }
      const verificaCPF = await knex("clientes")
        .where({ cpf })
        .count("id as count");

      if (verificaCPF.count > 0) {
        return res
          .status(400)
          .json({ Mensagem: "O CPF informado já está cadastrado" });
      }
      body.cpf = cpf;
    }

    if (cep) {
      const dadosEndereco = await enderecamento.obterEndereco(cep);

      if (!dadosEndereco || dadosEndereco.erro) {
        return res.status(404).json({ Mensagem: "Endereço não encontrado!" });
      }

      rua = dadosEndereco.logradouro;
      bairro = dadosEndereco.bairro;
      cidade = dadosEndereco.localidade;
      estado = dadosEndereco.uf;
    }
    if (rua) {
      body.rua = rua;
    }
    if (numero) {
      body.numero = numero;
    }
    if (bairro) {
      body.bairro = bairro;
    }
    if (cidade) {
      body.cidade = cidade;
    }
    if (estado) {
      body.estado = estado;
    }

    const clienteAtualizado = await knex("clientes")
      .where({ id })
      .update(body)
      .returning("*");

    console.log(body);

    if (!clienteAtualizado) {
      return res
        .status(400)
        .json({ Mensagem: "Não foi possível atualizar o cliente" });
    }

    return res
      .status(200)
      .json({ Mensagem: "Cliente atualizado com sucesso!", clienteAtualizado });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const listarClientes = async (req, res) => {
  const { offset } = req.query

  const paginacao = offset ? offset : 0;

  try {
    const clientes = await knex("clientes").select("*")
      .limit(10).offset(paginacao)

    if (clientes.length === 0) {
      return res.status(404).json({ mensagem: "Não existem clientes cadastrados." })
    }

    return res.status(200).json(clientes)

  } catch (error) {
    return res.status(500).json(error.message)
  }
};

const detalharCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await knex('clientes').where('id', id).first();

    if (cliente) {
      return res.status(200).json(cliente);
    } else {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  registrarCliente,
  editarCliente,
  listarClientes,
  detalharCliente,
};
