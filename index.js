const express = require("express"); //importando o express para dentro do projeto
const connectToDatabase = require("./src/database/database.js"); //arquivo de conexão com o DB
const usuario = require("./src/router/usuario.router.js"); //arquivo de rota do usuário

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o DB

app.use("/usuario", usuario); //chamando as rotas do usuário

app.get("/", (req,res) => {
    res.send({message: "CRUD Pizzaria completo"});
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})