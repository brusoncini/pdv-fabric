const knex = require("../conexao")

const listarPedidos = async (req, res) => {
   const { cliente_id } = req.query;
   try {

      if (cliente_id) {

         if (isNaN(cliente_id)) {
            return res
               .status(400)
               .json({
                  mensagem:
                     "Parâmetro inválido. Apenas números inteiros são permitidos."
               });
         }

         const pedidosClienteId = await knex("pedidos").where("cliente_id", cliente_id)



      } else {

         const pedidos = await knex("pedidos").select('*')

         if (pedidos.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum pedido foi feito." })
         }

         return res.status(200).json(pedidos)
      }


   } catch (error) {
      return res.status(500).json(error.message);
   }



}


module.exports = {
   listarPedidos
}