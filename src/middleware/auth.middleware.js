const jwt = require("jsonwebtoken");
const { findUserByIdService } = require("../service/usuario.service.js");

module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).send({ message: "O token não foi informado!"});
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
        return response.status(401).send({ message: "Token inválido!" });
    }

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema)) {
        return response.status(401).send({ message: "O token malformado" });
    }

    jwt.verify(token, process.env.SECRET, async(error, decoded) => {
        if(error){
            return response.status(500).send({ message: "Token inválido!" });
        }

        const user = await findUserByIdService(decoded.id);

        if (!user || !user.id) {
            return response.status(401).send({ message: "Token inválido!" });
        }

        request.userId = decoded.id;

        return next();
    })
}