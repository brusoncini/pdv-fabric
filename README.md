![imagem](https://i.imgur.com/i4tDWiG.png)

# PDV-Fabric 👩‍💻

## Descrição 🌸

Este projeto consiste em uma API para um PDV (Ponto de Venda) ou Frente de Caixa, desenvolvida como parte do desafio de conclusão do curso da Cubos Academy. A API é construída em Node.js, usando PostgreSQL como banco de dados e seguindo os princípios de uma API REST.

<details>
<summary><b>Ferramentas e Tecnologias 🔧</b></summary>

- JavaScript
- Nodejs
- ElephantSQL e PostgreSQL para criação do banco de dados
- Npm para instalação de dependências
- Express para conexão com o servidor
- JSON Web Token (JWT) para gerar token de autenticação
- Nodemailer para disparo de e-mails
- Knex para conexão com o banco de dados
- AWS-SDK para salvar imagem em banco de dados
- Joi para validações
- Bcrypt para criptografia de senha
- Axios para requisições HTTP
- Cors para permitir solicitações de recursos de diferentes origens (Cross-Origin Resource Sharing)
- Dotenv para configuração de variáveis de ambiente
- Handlebars para renderização de modelos do lado do servidor
- Multer para upload de arquivos no banco de dados
- Pg para conexão com PostgreSQL
- Nodemon para diminuir a necessidade de reconexão com servidor

</details>

<details>
<summary><b>Recursos 💫</b></summary> 

- Cadastro de Usuários
- Login de Usuários
- Detalhamento de Perfil de Usuário Logado
- Edição de Perfil de Usuário Logado
- Listagem de Categorias
- Cadastro de Produtos
- Edição de Produtos
- Listagem de Produtos
- Detalhamento de Produto
- Exclusão de Produto por ID
- Cadastro de Clientes
- Edição de Clientes
- Listagem de Clientes
- Detalhamento de Cliente
- Cadastro de Pedidos
- Listagem de Pedidos
- Exclusão de Produto com validação
- Aprimoramento de cadastro/atualização de produto com imagens
- Aprimoramento de exclusão de produto com exclusão de imagem

</details>

<details>
<summary><b>Banco de Dados 📁</b></summary>

A API utiliza um banco de dados `PostgresSQL` hospedado no serviço `Elephantsql`. O script de criação das tabelas e inserção das categorias está disponível no projeto. Certifique-se de executar o script no banco de dados PostgreSQL fornecido pelo serviço Elephantsql para configurar as tabelas necessárias.

</details>

<details>
<summary><b>Endpoints Principais 📌</b></summary>
<br>

- Cadastro de Usuário: `POST /usuario`
<br>
  
- Login de Usuário: `POST /login`
<br>
  
- Listagem de Categorias: `GET /categoria`
<br>
  
- Cadastro de Produtos: `POST /produto`
<br>

- Edição de Produtos: `PUT /produto/:id`
<br>

- Listagem de Produtos: `GET /produto`
<br>
  
- Detalhamento de Produto: `GET /produto/:id`
<br>

- Exclusão de Produto por ID: `DELETE /produto/:id`
<br>

- Cadastro de Clientes: `POST /cliente`
<br>

- Edição de Clientes: `PUT /cliente/:id`
<br>

- Listagem de Clientes: `GET /cliente`
<br>

- Detalhamento de Cliente: `GET /cliente/:id`
<br>

- Cadastro de Pedidos: `POST /pedido`
<br>

- Listagem de Pedidos: `GET /pedido`

</details>

<details>
<summary><b>Status Codes ✅</b></summary>

A API retorna os seguintes códigos de status:

- 200 (OK)
- 201 (Created)
- 204 (No Content)
- 400 (Bad Request)
- 401 (Unauthorized)
- 403 (Forbidden)
- 404 (Not Found)
- 500 (Internal Server Error)

</details>

<details>
<summary><b>Deploy 🚀</b></summary>

O projeto foi implantado e está acessível em [https://nice-pink-cougar-suit.cyclic.app/](https://nice-pink-cougar-suit.cyclic.app/).

</details>







</details>

![image](https://github.com/brusoncini/pdv-fabric/assets/129636115/d7372fd3-4e3b-4004-bc3c-6fdf69c726df)


###### tags:  `Tech Girls` `PDV-Fabric` `Back-end` `Módulo 5` `NodeJS` `PostgreSQL` `API REST` `Desafio Final` `Cubos-Academy`
