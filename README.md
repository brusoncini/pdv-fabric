# PDV-Fabric

## Descrição

Este projeto consiste em uma API para um PDV (Ponto de Venda) ou Frente de Caixa, desenvolvida como parte do desafio de conclusão do curso da Cubos Academy. A API é construída em Node.js, usando PostgreSQL como banco de dados e seguindo os princípios de uma API REST.

<details>
<summary><b>Recursos</b></summary>

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
<summary><b>Banco de Dados</b></summary>

A API utiliza um banco de dados `PostgresSQL` hospedado no serviço `Elephantsql`. O script de criação das tabelas e inserção das categorias está disponível no projeto. Certifique-se de executar o script no banco de dados PostgreSQL fornecido pelo serviço Elephantsql para configurar as tabelas necessárias.

</details>

<details>
<summary><b>Endpoints Principais</b></summary>

- Cadastro de Usuário: `POST /usuario`
- Login de Usuário: `POST /login`
- Listagem de Categorias: `GET /categoria`
- Cadastro de Produtos: `POST /produto`
- Edição de Produtos: `PUT /produto/:id`
- Listagem de Produtos: `GET /produto`
- Detalhamento de Produto: `GET /produto/:id`
- Exclusão de Produto por ID: `DELETE /produto/:id`
- Cadastro de Clientes: `POST /cliente`
- Edição de Clientes: `PUT /cliente/:id`
- Listagem de Clientes: `GET /cliente`
- Detalhamento de Cliente: `GET /cliente/:id`
- Cadastro de Pedidos: `POST /pedido`
- Listagem de Pedidos: `GET /pedido`

</details>

<details>
<summary><b>Status Codes</b></summary>

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
<summary><b>Deploy</b></summary>

O projeto foi implantado e está acessível em [https://nice-pink-cougar-suit.cyclic.app/](https://nice-pink-cougar-suit.cyclic.app/).

</details>







</details>

###### tags:  `Tech Girls` `PDV-Fabric` `Back-end` `Módulo 5` `NodeJS` `PostgreSQL` `API REST` `Desafio Final` `Cubos-Academy`
