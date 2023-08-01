const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

async function loginController(request, response) {
    try {
        const { email, senha } = request.body;
        const user = await authService.loginService(email);

        if (!user) {
            return response.status(400).send({ message: "Usuário não encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);

        if (!isPasswordValid) {
            return response.status(400).send({ message: "Senha inválida!" });
        }

        const token = authService.generateToken(user.id);
        response.status(200).send({ email, token });
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        response.status(500).send({ message: "Erro interno do servidor" });
    }
}

module.exports = { loginController };