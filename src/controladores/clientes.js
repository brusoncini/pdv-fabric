const knex = require('knex');
const axios = require('axios')


const registrarCliente = async (req, res) => {
   const { nome, email, cpf } = req.body

   if (!nome) {
      return res.status(404).json({ mensagem: 'O nome do cliente deve ser informado.' });
   }

   if (!email) {
      return res.status(404).json({ mensagem: 'O e-mail do cliente deve ser informado.' });
   }

   if (!cpf) {
      return res.status(404).json({ mensagem: 'O CPF do cliente deve ser informado.' });
   }

   try {

      const emailExiste = await knex('clientes').where({ email }).first();

      if (emailExiste) {
         return res.status(404).json({ mensagem: 'O e-mail informado já existe.' });
      }
      const cpfExiste = await knex('clientes').where({ cpf }).first();

      if (cpfExiste) {
         return res.status(404).json({ mensagem: 'O CPF informado já existe' });
      }

      const cliente = await knex('clientes').insert({
         nome,
         email,
         cpf
      });

      if (!cliente) {
         return res.status(400).json({ mensagem: 'O cliente não foi cadastrado.' })
      }

      return res.status(200).json({ mensagem: 'Cliente cadastrado com sucesso.' })
   } catch (error) {
      return res.status(500).json(error.message)
   }
}

module.exports = {
   registrarCliente
}

// incompleto...

//id nome email cpf cep rua numero bairro cidade estado //