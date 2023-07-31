const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String },
    imagem: { type: String, required: true },
    logradouro: {
        rua: { type: String },
        numero: { type: Number },
        cidade: { type: String },
        estado: { type: String },
        pais: { type: String }
    },
    telefone: { type: Number },
    createdAt: { type: Date, required: true },
    produtos_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos" },
            createdAt: { type: Date, required: true },
        }
    ],
    admin: { type: Boolean, required: true, default: false },
});

const Usuario = mongoose.model("usuarios",UsuarioSchema);

module.exports = Usuario;