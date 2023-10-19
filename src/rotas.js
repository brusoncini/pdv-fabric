const express = require("express");
const verificarUsuarioLogado = require('./intermediarios/autenticacao')
const { registrarUsuario } = require("./controladores/usuarios");
const { listarCategorias } = require("./controladores/categorias");
const { registrarProduto, listarProdutos } = require("./controladores/produtos");

const rotas = express();


rotas.get("/categoria", listarCategorias);
rotas.post("/usuario", registrarUsuario);
<<<<<<< Updated upstream
rotas.post("/login");
rotas.get("/usuario");
rotas.put("/usuario");
=======
rotas.post("/login", login);

rotas.use(verificarUsuarioLogado)

rotas.get("/usuario", perfilUsuario);
rotas.put("/usuario", editarUsuario);
rotas.post("/produto", registrarProduto);
rotas.get("/produto", listarProdutos);
>>>>>>> Stashed changes



rotas.use(verificarUsuarioLogado) // esse comando inteiro deverá ser colocado uma linha antes das rotas que precisam de autenticação


module.exports = rotas;