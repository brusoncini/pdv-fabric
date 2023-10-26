const knex = require("../conexao");
const compiladorHTML = require('../utilidades/compiladorHTML')
const transportador = require('../nodemailer')


const registrarPedido = async (req, res) => {
   const { cliente_id, pedido_produtos } = req.body;

   if (!cliente_id || isNaN(cliente_id) || !pedido_produtos || pedido_produtos.length === 0) {
      return res.status(400).json({ Mensagem: 'Campos obrigatórios não fornecidos.' });
   }

   let valorTotal = 0;
   const pedido_produto = [];

   try {
      const clienteExiste = await knex('clientes').where({ id: parseInt(cliente_id) }).first();

      if (!clienteExiste) {
         return res.status(400).json({ Mensagem: `Cliente com ID ${cliente_id} não encontrado.` });
      }

      let pedido = { cliente_id: parseInt(cliente_id) };

      if (req.body.observacao) {
         pedido.observacao = req.body.observacao;
      }

      for (const produto of pedido_produtos) {
         const { produto_id, quantidade_produto } = produto;

         if (!produto_id || !quantidade_produto || quantidade_produto <= 0) {
            return res.status(400).json({ Mensagem: 'Campos obrigatórios para produtos não fornecidos ou inválidos.' });
         }

         const produtoExiste = await knex('produtos').where({ id: produto_id }).first();

         if (!produtoExiste) {
            return res.status(400).json({ Mensagem: `Produto com ID ${produto_id} não encontrado.` });
         }

         if (quantidade_produto > produtoExiste.quantidade_estoque) {
            return res.status(400).json({ Mensagem: `Quantidade em estoque insuficiente para o produto com ID ${produto_id}.` });
         }

         const valorProduto = produtoExiste.valor;
         const valorParcial = valorProduto * quantidade_produto;
         valorTotal += valorParcial;
      }

      pedido.valor_total = valorTotal;
      const novoPedido = await knex('pedidos').insert(pedido).returning('*');

      for (let i = 0; i < pedido_produtos.length; i++) {
         const produto = pedido_produtos[i];
         const produtoExiste = await knex('produtos').where({ id: produto.produto_id }).first();
         const pedido_produto_tabela = await knex('pedido_produtos').insert({
            pedido_id: novoPedido[0].id,
            produto_id: produtoExiste.id,
            quantidade_produto: produto.quantidade_produto,
            valor_produto: produtoExiste.valor
         }).returning('*');
         pedido_produto.push(pedido_produto_tabela);
      }

      const registro = {
         novoPedido,
         pedido_produto
      }

      const email_html = await compiladorHTML('src/utilidades/Email.html', { nome: clienteExiste.nome, id: novoPedido[0].id })

      transportador.sendMail({
         from: 'API-PDV <apipdv406@gmail.com>',
         to: `${clienteExiste.nome} <${clienteExiste.email} >`,
         subject: 'Cadastro de pedido',
         html: email_html
      });





      return res.status(201).json({ Mensagem: 'Pedido criado com sucesso.', registro });
   } catch (error) {
      console.log(error)
      return res.status(500).json({ mensagem: error.message });

   }
};


const listarPedidos = async (req, res) => {
   const { cliente_id } = req.query
   //esta rota precisa de testes, testei só com 1 usuario e 1 pedido.. Pois ainda não tinha cadastro de pedidos.
   try {
      if (cliente_id) { //busca pedido pelo id, 

         if (isNaN(cliente_id)) {
            return res.status(400)
               .json({
                  mensagem: 'Para listar pedidos do cliente digite um número válido.'
               });
         }

         const pedidos = await knex("pedidos")
            .where('cliente_id', cliente_id)
            .select('*');

         for (let pedido of pedidos) {

            const pedidoProdutos = await knex("pedido_produtos")
               .where("pedido_id", pedido.id)
               .select('*')
            pedido.pedido_produtos = pedidoProdutos;
         }

         return res.status(200).json(pedidos)
      } else {
         const pedidos = await knex("pedidos")
            .select('*');

         for (let pedido of pedidos) {
            const pedidoProdutos = await knex("pedido_produtos")
               .where('pedido_id', pedido.id)
               .select('*')
            pedido.pedido_produtos = pedidoProdutos;
         }

         return res.status(200).json(pedidos);
      }

   } catch (error) {
      return res.status(500).json(error.message)
   }

}

module.exports = {
   listarPedidos,
   registrarPedido
}