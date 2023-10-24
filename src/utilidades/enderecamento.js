const axios = require('axios');

const obterEndereco = async (cep) => {

   try {
      const resposta = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)

      return resposta.data;

   } catch (error) {
      console.error(error.message)
   }
}

module.exports = { obterEndereco }
