const express = require("express");
const verificarUsuarioLogado = require('./intermediarios/autenticacao')
const { login } = require('./controladores/login')
const { registrarUsuario, perfilUsuario, editarUsuario } = require("./controladores/usuarios");
const { listarCategorias } = require("./controladores/categorias");
const { registrarCliente, editarCliente, listarClientes, detalharCliente } = require("./controladores/clientes")
const { registrarProduto, editarProduto, listarProdutos, detalharProduto, deletarProduto, registrarImagemProduto, atualizarImagemProduto } = require("./controladores/produtos");
const { listarPedidos, registrarPedido } = require("./controladores/pedidos")
const validarRequisicao = require("./intermediarios/validarCorpoRequisicao");
const esquemaUsuario = require("./intermediarios/esquemaUsuario");
const esquemaLogin = require("./intermediarios/esquemaLogin");
const esquemaProduto = require("./intermediarios/esquemaProduto");
const esquemaCliente = require("./intermediarios/esquemaCliente");
const multer = require("./intermediarios/multer");
const esquemaPedido = require("./intermediarios/esquemaPedido");

const rotas = express();

rotas.get("/categoria", listarCategorias);
rotas.post("/usuario", validarRequisicao(esquemaUsuario), registrarUsuario);

rotas.post("/login", validarRequisicao(esquemaLogin), login);

rotas.use(verificarUsuarioLogado);

rotas.get("/usuario", perfilUsuario);
rotas.put("/usuario", validarRequisicao(esquemaUsuario), editarUsuario);

rotas.post("/produto", validarRequisicao(esquemaProduto), registrarProduto);
rotas.put("/produto/:id", validarRequisicao(esquemaProduto), editarProduto);
rotas.get("/produto", listarProdutos);
rotas.get("/produto/:id", detalharProduto)
rotas.post("/produto/:id/imagem", multer.single('imagem'), registrarImagemProduto)
rotas.patch("/produto/:id/imagem", multer.single('imagem'), atualizarImagemProduto)
rotas.delete("/produto/:id", deletarProduto);

rotas.post("/cliente", validarRequisicao(esquemaCliente), registrarCliente);
rotas.put("/cliente/:id", validarRequisicao(esquemaCliente), editarCliente);
rotas.get("/cliente", listarClientes);
rotas.get("/cliente/:id", detalharCliente);

rotas.get("/pedido", listarPedidos);
rotas.post("/pedido", validarRequisicao(esquemaPedido), registrarPedido);

module.exports = rotas;
