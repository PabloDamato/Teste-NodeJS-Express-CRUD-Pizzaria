const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send({message: "CRUD Pizzaria completo"});
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})