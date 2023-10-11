const express = require("express");
const verificarUsuarioLogado = require('./intermediarios/autenticacao')
const rotas = express();

rotas.post("/usuario");
rotas.post("/login");
rotas.get("/usuario");
rotas.put("/usuario");

module.exports = rotas;





rotas.use(verificarUsuarioLogado) // esse comando inteiro deverá ser colocado uma linha antes das rotas que precisam de autenticação