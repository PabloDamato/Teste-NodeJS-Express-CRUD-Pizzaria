const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String },
    logradouro: {
        rua: { type: String },
        numero: { type: Number },
        cidade: { type: String },
        estado: { type: String },
        pais: { type: String }
    },
    telefone: { type: Number },
    admin: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true },
});

const Usuario = mongoose.model("usuarios",UsuarioSchema);

module.exports = Usuario;