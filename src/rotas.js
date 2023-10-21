const express = require("express");
const verificarUsuarioLogado = require('./intermediarios/autenticacao')
const { registrarUsuario, perfilUsuario, login, editarUsuario } = require("./controladores/usuarios");
const { listarCategorias } = require("./controladores/categorias");
const { registrarCliente, editarCliente, detalharCliente } = require("./controladores/clientes")
const { registrarProduto, listarProdutos, editarProduto, deletarProduto } = require("./controladores/produtos");

const rotas = express();


rotas.get("/categoria", listarCategorias);
rotas.post("/usuario", registrarUsuario);

rotas.post("/login", login);

rotas.use(verificarUsuarioLogado);

rotas.get("/usuario", perfilUsuario);
rotas.put("/usuario", editarUsuario);

rotas.post("/produto", registrarProduto);
rotas.get("/produto", listarProdutos);
rotas.put("/produto/:id", editarProduto);
rotas.delete("/produto/:id", deletarProduto);

rotas.post("/cliente", registrarCliente);
rotas.put("/cliente/:id", editarCliente);
rotas.get("/cliente/:id", detalharCliente);

module.exports = rotas;