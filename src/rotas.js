const express = require("express");
const verificarUsuarioLogado = require('./intermediarios/autenticacao')
const { registrarUsuario, perfilUsuario } = require("./controladores/usuarios");
const { listarCategorias } = require("./controladores/categorias");

const rotas = express();


rotas.get("/categoria", listarCategorias);
rotas.post("/usuario", registrarUsuario);
rotas.post("/login");
rotas.get("/usuario", perfilUsuario);
rotas.put("/usuario");



rotas.use(verificarUsuarioLogado) // esse comando inteiro deverá ser colocado uma linha antes das rotas que precisam de autenticação


module.exports = rotas;