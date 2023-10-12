const express = require("express");
const verificarUsuarioLogado = require('./intermediarios/autenticacao')
const { registrarUsuario, perfilUsuario, login, editarUsuario } = require("./controladores/usuarios");
const { listarCategorias } = require("./controladores/categorias");

const rotas = express();


rotas.get("/categoria", listarCategorias);
rotas.post("/usuario", registrarUsuario);
rotas.post("/login", login);

rotas.use(verificarUsuarioLogado)

rotas.get("/usuario", perfilUsuario);
rotas.put("/usuario", editarUsuario);





module.exports = rotas;