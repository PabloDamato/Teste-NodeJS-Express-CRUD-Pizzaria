const userService = require("../service/usuario.service.js");

const findAllController = async (request, response) => {
    try {
        response.status(200).send(await userService.findAllService()); 

    } catch (error) {
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({message: `Erro ao localizar todos os registros.`})
    }
}

const findController = async (request, response) => {
    try {
        const user = await userService.findUserByIdService(request.params.id);

        if (!user) {
            return response.status(404).send({message: "Usuário não encontrado, tente novamente!"});
        }

        response.status(200).send(user);

    } catch (error) {
        if (error.kind == "ObjectId") {
            console.log(error.kind == "ObjectId");
            return response.status(400).send({message: `Id informado, está incorreto, tente novamente!`});
        }

        console.log(`Erro: ${error.message}`);
        return response.status(500).send({message: `Erro ao localizar o usuário!`});
    }
}

const createUsuarioController = async (request, response) => {
    try {
        const user = request.body;

        //valida se o corpo da mensagem está vazio
        if (Object.keys(user).length === 0) {
            return response.status(400).send({message: "O corpo da mensagem está vazio!"});
        }

        //valida se todos os campos foram informados, pois todos os campos são obrigatórios
        if(!user.nome){
            return response.status(400).send({message: "O campo 'nome' não foi encontrado!"});
        }

        if(!user.email){
            return response.status(400).send({message: "O campo 'email' não foi encontrado!"});
        }

        if(!user.senha){
            return response.status(400).send({message: "O campo 'senha' não foi encontrado!"});
        }

        if(!user.logradouro.rua){
            return response.status(400).send({message: "O campo 'rua' não foi encontrado!"});
        }

        if(!user.logradouro.numero){
            return response.status(400).send({message: "O campo 'numero' não foi encontrado!"});
        }

        if(!user.logradouro.cidade){
            return response.status(400).send({message: "O campo 'cidade' não foi encontrado!"});
        }

        if(!user.logradouro.estado){
            return response.status(400).send({message: "O campo 'estado' não foi encontrado!"});
        }

        if(!user.logradouro.pais){
            return response.status(400).send({message: "O campo 'pais' não foi encontrado!"});
        }

        if(!user.telefone){
            return response.status(400).send({message: "O campo 'telefone' não foi encontrado!"});
        }

        return response.status(201).send(await userService.createUsuarioService(user));

    } catch (error) {
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({message: `Erro ao criar o usuário.`})
    }
}

const updateUsuarioController = async (request, response) => {
    try {
        const user = request.body;

        //valida se o corpo da mensagem está vazio
        if (Object.keys(user).length === 0) {
            return response.status(400).send({message: "O corpo da mensagem está vazio!"});
        }

        //valida se todos os campos foram informados, pois todos os campos são obrigatórios
        if(!user.nome){
            return response.status(400).send({message: "O campo 'nome' não foi encontrado!"});
        }

        if(!user.email){
            return response.status(400).send({message: "O campo 'email' não foi encontrado!"});
        }

        if(!user.senha){
            return response.status(400).send({message: "O campo 'senha' não foi encontrado!"});
        }

        if(!user.logradouro.rua){
            return response.status(400).send({message: "O campo 'rua' não foi encontrado!"});
        }

        if(!user.logradouro.numero){
            return response.status(400).send({message: "O campo 'numero' não foi encontrado!"});
        }

        if(!user.logradouro.cidade){
            return response.status(400).send({message: "O campo 'cidade' não foi encontrado!"});
        }

        if(!user.logradouro.estado){
            return response.status(400).send({message: "O campo 'estado' não foi encontrado!"});
        }

        if(!user.logradouro.pais){
            return response.status(400).send({message: "O campo 'pais' não foi encontrado!"});
        }

        if(!user.telefone){
            return response.status(400).send({message: "O campo 'telefone' não foi encontrado!"});
        }

        return response.send(await userService.updateUsuarioService(request.params.id, user));

    } catch (error) {
        //caso houver erro, o mesmo é mostrado no console e uma msg é exibida para o usuário
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({ message: "Erro ao atualizar o usuário." });
    }
}

const deleteUsuarioController = async (request, response) => {
    try {
        // Encontra e deleta o usuário pelo id
        const deletedUsuario = await userService.deleteUsuarioService(request.params.id);

        if (!deletedUsuario) {
            return response.status(404).send({ message: "Usuário não encontrado!" });
        }

        return response.status(200).send({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
        //caso houver erro, o mesmo é mostrado no console e uma msg é exibida para o usuário
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({ message: "Erro ao deletar o usuário." });
    }
}

module.exports = {
    findAllController,
    findController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController
}