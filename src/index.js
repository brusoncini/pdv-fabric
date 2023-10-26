require('dotenv').config();

const express = require("express");
const rotas = require("./rotas");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())
app.use(rotas);

app.listen("8000", () => {
  console.log("Server online on port 8000 🚀");
});