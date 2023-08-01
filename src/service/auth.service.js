const Usuario = require("../model/Usuario.js");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email }).select("senha");

const generateToken = (userId) => jwt.sign({id: userId}, "as4587fd51c5a4s56a4d8sad5s4d6a15xc5c65a4c8w6q4", { expiresIn: 86400});

module.exports = { loginService, generateToken };