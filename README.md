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

A API utiliza um banco de dados `PostgresSQL` hospedado no serviço `ElephantSQL`. O script de criação das tabelas e inserção das categorias está disponível no projeto.
</details>

<details>
<summary><b>Como executar o projeto ⚙️</b></summary>

## Pré-requisitos

Antes de executar este projeto, certifique-se de que sua máquina atende aos seguintes pré-requisitos:

- **Aplicativo de teste de API**: Você precisará de um aplicativo de teste de API, como o [Insomnia](https://insomnia.rest) ou o [Postman](https://www.postman.com).
---
### Executando com o link do Projeto
- **Link do Deploy**:  https://nice-pink-cougar-suit.cyclic.app

- Copie o link <br>
- Execute os endpoints no seu aplicativo de teste de API seguindo o passo a passo dos Endpoints 📌 abaixo

----

### Executando a aplicação em modo de desenvolvimento

#### Ferramentas Necessárias

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Git**
- **Node.js**
- **VSCode** ou outra IDE de sua escolha
- **PostgreSQL**: Um sistema de gerenciamento de banco de dados relacional.
- **Beekeeper Studio** ou um software similar para gerenciamento de bancos de dados.



### Siga as etapas abaixo para configurar o projeto:

1. Clone este repositório em sua máquina.

2. Abra a pasta do projeto na sua IDE.

3. Crie o banco de dados a partir do arquivo de despejo `sql.sql`.

4. Instale as dependências executando o seguinte comando:

   ```bash
   npm install

5. Crie um arquivo de variáveis de ambiente chamado .env com as informações necessárias. Certifique-se de incluir as configurações para o Bucket e SMTP. Você pode usar o arquivo .env.example como modelo.

6.  Execute a aplicação em modo de desenvolvimento com o seguinte comando:
    ```bash
    npm run dev

7. Certifique-se de que as variáveis do banco de dados, porta,  Bucket e SMTP no arquivo .env estejam configuradas corretamente para que o projeto funcione conforme o esperado.

8. Execute os endpoints no seu aplicativo de teste de API seguindo o passo a passo dos Endpoints 📌 abaixo
</details>

<details>
<summary><b>Endpoints 📌</b></summary>
<br>

- Listagem de Categorias: `GET /categoria`
<br>

 ![listar_categorias](https://github.com/brusoncini/pdv-fabric/assets/136760650/4568906d-6ee7-4b55-88d6-6f0f2cc8d74a)

 ---

- Cadastro de Usuário: `POST /usuario`
<br>

 ![cadastrar_usuario](https://github.com/brusoncini/pdv-fabric/assets/136760650/adeced22-878e-4e3a-8f91-e0418cfc0bdd)
 
  ---
  
- Login de Usuário: `POST /login`
<br>

  ![login](https://github.com/brusoncini/pdv-fabric/assets/136760650/79eac228-84b5-4949-992b-23c1e4d9ed6f)
  
---
  
### As rotas a seguir exigem o token de autenticação do usuário logado, recebido no header com o formato Bearer Token.
Siga a demonstração abaixo para usar o token de autenticação
<br>

  ![token_auth](https://github.com/brusoncini/pdv-fabric/assets/136760650/d5a59dba-13b1-4387-b731-a365f7c95a37)

---

- Editar Usuário `PUT /usuario`
<br>

 ![editar_usuario](https://github.com/brusoncini/pdv-fabric/assets/136760650/548d74a5-78b8-4c04-9dc8-8faa6451bb48)

  ---
  
- Cadastro de Produtos: `POST /produto`
<br>

  ![cadastrar_produto](https://github.com/brusoncini/pdv-fabric/assets/136760650/959ec08f-98f7-4808-9b39-a98917cab9c9)

  ---
  
- Edição de Produtos: `PUT /produto/:id`
<br>

   ![editar_produto](https://github.com/brusoncini/pdv-fabric/assets/136760650/71e505c5-13c0-44ec-8502-2c189fe94f0f)
  
  ---
  
 - Cadastrar a imagem de um produto: `POST /produto/:id/imagem`
 <br>

 ![enviar_imagem](https://github.com/brusoncini/pdv-fabric/assets/136760650/040be174-16d2-4a71-84e7-5cab4d42c367)
 
 ---
    
 - Editar a imagem de um produto: `PATCH /produto/:id/imagem`
<br>
      
 ![atualizar_imagem](https://github.com/brusoncini/pdv-fabric/assets/136760650/875dac63-e5ed-4e1a-a562-61d00165dd0c)    
  
---

- Listagem de Produtos: `GET /produto`
<br>

 ![listar_produtos](https://github.com/brusoncini/pdv-fabric/assets/136760650/ffa75be1-77ba-4dda-ba84-308e45f750a3)
 
 ---
 
 - Listagem de Produtos com QUERY para obter produtos de uma determinada categoria: `GET /produto?categoria_id=`
<br>
   
 ![listar_produtos_query](https://github.com/brusoncini/pdv-fabric/assets/136760650/b8a7f1f8-e3ba-4f43-8147-2ca089311b10)
 
 ---
  
- Detalhamento de Produto: `GET /produto/:id`
<br>

  ![obter_produto](https://github.com/brusoncini/pdv-fabric/assets/136760650/009fde87-0382-4350-9f8a-181783207c4a)

  ---

- Exclusão de Produto por ID: `DELETE /produto/:id`
<br>

   ![excluir_produto](https://github.com/brusoncini/pdv-fabric/assets/136760650/9e22fb6c-77b5-43ae-8529-3dc37a60b394)

  ---

- Cadastro de Clientes: `POST /cliente`
<br>

  ![cadastrar_cliente](https://github.com/brusoncini/pdv-fabric/assets/136760650/d1d8efab-1509-423c-ae42-dd17d70ac8ff)

 ---

- Edição de Clientes: `PUT /cliente/:id`
<br>

   ![editar_cliente](https://github.com/brusoncini/pdv-fabric/assets/136760650/41233092-72b1-4053-b333-0a8a8ff5d75d)

  ---

- Listagem de Clientes: `GET /cliente`
<br>

   ![listar_clientes](https://github.com/brusoncini/pdv-fabric/assets/136760650/f25ce1e2-0af4-4783-ac9e-d54adde97e98)

  ---

- Detalhamento de Cliente: `GET /cliente/:id`
<br>

   ![detalhar_cliente](https://github.com/brusoncini/pdv-fabric/assets/136760650/93d95b43-6559-4176-b204-a6f8048221aa)

  ---

- Cadastro de Pedidos: `POST /pedido`
<br>

   ![registrar_pedido](https://github.com/brusoncini/pdv-fabric/assets/136760650/354528c7-c773-4518-a7b9-89c572661831)

  ---
  
- Listagem de Pedidos: `GET /pedido`
<br>

 ![listar_pedidos](https://github.com/brusoncini/pdv-fabric/assets/136760650/9c47047e-f2d4-4b9f-afa7-febd2689eb13)
 
 ---
 
 - Listagem de Pedidos com QUERY para obter pedidos de um determinado cliente: `GET /pedido?cliente_id=`
 <br>

  ![listar_pedidos_query](https://github.com/brusoncini/pdv-fabric/assets/136760650/402fab0f-6b3e-49ec-bdf8-fcd8977f9e44)

 ---

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
O projeto foi implantado e está acessível em <button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; transition-duration: 0.4s; cursor: pointer;">
  <a href="https://nice-pink-cougar-suit.cyclic.app/" style="color: white; text-decoration: none;">API-PDV-Fabric</a>
</button>
 
 </details>
 
<details>



 
 <summary><b>Colaboração e Trabalho em Equipe 🤝</b></summary>

<br>

A criação da API PDV-Fabric foi uma jornada que marcou nossa união como o Grupo Tech Girls. Cada uma de nós se dedicou apaixonadamente a esse projeto, demonstrando um empenho extraordinário e uma colaboração excepcional.

O trabalho em grupo foi meticulosamente distribuído, permitindo que cada uma de nós desempenhasse um papel ativo, integrando-se e auxiliando as outras. Utilizamos o Trello como nosso principal aliado, onde planejamos minuciosamente cada etapa e administramos com clareza as tarefas de cada integrante.

Todos os dias, antes das sessões ao vivo do curso, tínhamos nossas reuniões diárias, momentos cruciais em que nos dedicamos intensamente para entregar um trabalho de qualidade e alcançar a satisfação pessoal. A motivação e o engajamento que compartilhamos ao longo desse desafio enriqueceram nossa experiência diária e fortaleceram nossos laços como equipe.

Adoramos a oportunidade de estar imersas nesse desafio e desfrutar dessa troca diária enriquecedora com as colegas de equipe. Vocês, Equipe 21, são incríveis e é um privilégio trabalhar ao lado de cada uma de vocês!

Agradecemos imensamente à Cubos Academy por proporcionar este momento imersivo de aprendizado em tecnologia. A orientação e o apoio dedicados dos instrutores ao longo dos meses foram fundamentais para o nosso crescimento e aprimoramento nesse campo em constante evolução. Estamos verdadeiramente gratas pela oportunidade de adquirir habilidades valiosas e aplicá-las em um projeto tão significativo.

<br>

<p align="center">
  <img src="https://github.com/brusoncini/pdv-fabric/assets/129636115/85491958-e106-4a43-931f-42519280fa0f" alt="Descrição da imagem">
</p>

<br>


</details>





![image](https://github.com/brusoncini/pdv-fabric/assets/129636115/d7372fd3-4e3b-4004-bc3c-6fdf69c726df)


###### tags:  `Tech Girls` `PDV-Fabric` `Back-end` `Módulo 5` `NodeJS` `PostgreSQL` `API REST` `Desafio Final` `Cubos-Academy`
