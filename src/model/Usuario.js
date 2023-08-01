const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true},
    logradouro: {
        rua: { type: String, required: true },
        numero: { type: Number, required: true },
        cidade: { type: String, required: true },
        estado: { type: String, required: true },
        pais: { type: String, required: true }
    },
    telefone: { type: Number, required: true },
    admin: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now() },
});

UsuarioSchema.pre("save", async function(next){
    if (this.senha) {
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

UsuarioSchema.pre("findOneAndUpdate", async function(next){
    if (this._update.senha) {
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();
});

const Usuario = mongoose.model("usuarios",UsuarioSchema);

module.exports = Usuario;