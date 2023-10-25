const knex = require("../conexao");

const registrarProduto = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;


  try {
    const categoriaExistente = await knex("categorias")
      .where("id", categoria_id)
      .first();

    if (!categoriaExistente) {
      return res
        .status(400)
        .json({ mensagem: "A categoria informada não existe" });
    }

    const produtoExistente = await knex("produtos")
      .where("descricao", descricao)
      .first();

    if (produtoExistente) {
      return res
        .status(400)
        .json({ mensagem: "A descrição informada já está em uso" });
    }

    const novoProduto = {
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    };

    const [produto] = await knex("produtos").insert(novoProduto).returning("*");

    res.status(201).json({ Mensagem: "Produto cadastrado com sucesso!", produto });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const editarProduto = async (req, res) => {
  const { id } = req.params;
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  try {
    const encontrarProduto = await knex("produtos").where({ id }).first();

    if (!encontrarProduto) {
      return res.status(404).json({ Mensagem: "Produto não encontrado!" })
    }
    const produtoExistente = await knex("produtos").where("descricao", descricao).first()

    if (produtoExistente) {
      return res.status(400).json({ mensagem: "A descrição informada já está em uso" })
    }
    const produtoAtualizado = await knex("produtos")
      .update({ descricao, quantidade_estoque, valor, categoria_id })
      .where({ id })
      .returning("*");

    if (produtoAtualizado.length === 0) {
      return res
        .status(400)
        .json({ Mensagem: "O produto não foi atualizado!" })
    }

    return res
      .status(200)
      .json({
        Mensagem: "Produto atualizado com sucesso: ",
        produtoAtualizado,
      });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const listarProdutos = async (req, res) => {
  const { categoria_id } = req.query;

  try {
    let produtos;

    if (categoria_id) {
      if (isNaN(categoria_id)) {
        return res
          .status(400)
          .json({
            mensagem:
              'O parâmetro "categoria_id" deve ser um número inteiro válido',
          });
      }

      const categoriaExistente = await knex("categorias")
        .where("id", categoria_id)
        .first();

      if (!categoriaExistente) {
        return res
          .status(400)
          .json({ mensagem: "A categoria informada não existe" });
      }

      produtos = await knex("produtos").where("categoria_id", categoria_id);
    } else {
      produtos = await knex("produtos");
    }

    res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const detalharProduto = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(404).json({ mensagem: "Erro no ID do produto. Digite um número válido." })
  }
  try {
    const produto = await knex("produtos").where("id", id).first()

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado." })
    }
    return res.status(200).json(produto)
  } catch (error) {
    return res.status(500).json(error.message)
  }

}

const deletarProduto = async (req, res) => {
  const { id } = req.params;

  const pedidosComProduto = await knex('pedido_produtos').where('produto_id', id);

  if (pedidosComProduto.length > 0) {
    return res.status(409).json({ mensagem: "O produto não pode ser excluído pois está vinculado a um pedido." });
  }

  try {
    const produtoDeletado = await knex("produtos").where("id", id).del();

    if (produtoDeletado === 1) {
      return res.status(200).json({ message: "Produto excluído com sucesso." });
    } else {
      return res.status(404).json({ message: "Produto não encontrado." });
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  registrarProduto,
  editarProduto,
  listarProdutos,
  detalharProduto,
  deletarProduto,
};
