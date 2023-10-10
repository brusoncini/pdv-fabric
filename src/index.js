const express = require("express");
const rotas = require("./rotas");
const app = express();

app.use(express.json());
app.use(rotas);

app.listen("8000", () => {
  console.log("Server online on port 8000 🚀");
});