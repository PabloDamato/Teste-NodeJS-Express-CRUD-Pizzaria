const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect(process.env.URLDATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MONGO DB CONECTADO COM SUCESSO!")
    }).catch((err) => {
        return console.log(`ERRO NA CONEXÃO COM O MONGO DB: ${err}`)
    });
}

module.exports = connectToDatabase;