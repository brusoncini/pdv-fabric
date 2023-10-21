const express = require("express");
const verificarUsuarioLogado = require('./intermediarios/autenticacao')
const { registrarUsuario, perfilUsuario, login, editarUsuario } = require("./controladores/usuarios");
const { listarCategorias } = require("./controladores/categorias");
const { registrarCliente, editarCliente, listarClientes, detalharCliente } = require("./controladores/clientes")
const { registrarProduto, editarProduto, listarProdutos, detalharProduto, deletarProduto } = require("./controladores/produtos");

const rotas = express();


rotas.get("/categoria", listarCategorias);
rotas.post("/usuario", registrarUsuario);

rotas.post("/login", login);

rotas.use(verificarUsuarioLogado);

rotas.get("/usuario", perfilUsuario);
rotas.put("/usuario", editarUsuario);

rotas.post("/produto", registrarProduto);
rotas.put("/produto/:id", editarProduto);
rotas.get("/produto", listarProdutos);
rotas.get("/produto/:id", detalharProduto)
rotas.delete("/produto/:id", deletarProduto);

rotas.post("/cliente", registrarCliente);
rotas.put("/cliente/:id", editarCliente);
rotas.get("/cliente", listarClientes);
rotas.get("/cliente/:id", detalharCliente);

module.exports = rotas;