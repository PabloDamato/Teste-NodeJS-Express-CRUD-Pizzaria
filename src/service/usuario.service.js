const Usuario = require("../model/Usuario.js");

const findAllService = () => {
    return Usuario.find();
}

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const createUsuarioService = (body) => {
    return Usuario.create(body);
}

const updateUsuarioService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteUsuarioService = (id) => {
    return Usuario.findByIdAndRemove(id);
}

module.exports = {
    findAllService,
    findUserByIdService,
    createUsuarioService,
    updateUsuarioService,
    deleteUsuarioService
}