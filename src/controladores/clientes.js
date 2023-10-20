const knex = require('../conexao');
const enderecamento = require('../utilidades.js/enderecamento')


const registrarCliente = async (req, res) => {
   const { nome, email, cpf, cep, numero } = req.body

   if (!nome) {
      return res.status(404).json({ mensagem: 'O nome do cliente deve ser informado.' });
   }
   if (!email) {
      return res.status(404).json({ mensagem: 'O e-mail do cliente deve ser informado.' });
   }
   if (!cpf) {
      return res.status(404).json({ mensagem: 'O CPF do cliente deve ser informado.' });
   }
   if (cpf.length !== 11) {
      return res.status(404).json({ mensagem: 'CPF inválido. Por favor, verifique se foi digitado corretamente' });
   }

   try {

      const emailExiste = await knex('clientes').where({ email }).first();

      if (emailExiste) {
         return res.status(404).json({ mensagem: 'O e-mail informado já existe.' });
      }
      const cpfExiste = await knex('clientes').where({ cpf }).first();

      if (cpfExiste) {
         return res.status(404).json({ mensagem: 'O CPF informado já existe.' });
      }

      let rua, bairro, cidade, estado;
      if (cep) {
         const dadosEndereco = await enderecamento.obterEndereco(cep)

         if (!dadosEndereco || dadosEndereco.erro) {
            return res.status(404).json({ mensagem: 'Endereço não encontrado. Tente novamente com um CEP válido.' });
         }
         // não obrigatório informar cep mas opcional.
         rua = dadosEndereco.logradouro
         bairro = dadosEndereco.bairro
         cidade = dadosEndereco.localidade
         estado = dadosEndereco.uf
      }

      const cliente = await knex('clientes').insert({
         nome,
         email,
         cpf,
         cep,
         rua,
         numero,
         bairro,
         cidade,
         estado
      });

      if (!cliente) {
         return res.status(400).json({ mensagem: 'O cliente não foi cadastrado.' })
      }

      return res.status(200).json({ mensagem: "Cliente cadastrado com sucesso." })

   } catch (error) {
      return res.status(500).json(error.message)
   }
}

module.exports = {
   registrarCliente

}
