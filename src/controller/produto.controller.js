const pizzaService = require("../service/produto.service");

const findProductByIdController = async (request, response) => {
    try {
        response.send(await pizzaService.findProductByIdService(request.params.id));
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({ message: "Erro inesperado, tente novamente" });
    }
};

const findAllProductController = async (request, response) => {
    try {
        response.send(await pizzaService.findAllProductService());
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({ message: "Erro inesperado, tente novamente" });
    }
};

const CreateProductController = async (request, response) => {
    try {
        const corpo = {
            ...request.body,
            userId: request.userId,
            createdAt: new Date(),
        }

        response.send(await pizzaService.CreateProductService(corpo));
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({ message: "Erro inesperado, tente novamente" });
    }
};

const UpdateProductController = async (request, response) => {
    try {
        response.send(await pizzaService.UpdateProductService(request.params.id, request.body));
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({ message: "Erro inesperado, tente novamente" });
    }
};

const DeleteProductController = async (request, response) => {
    try {
        response.send(await pizzaService.DeleteProductService(request.params.id));
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        return response.status(500).send({ message: "Erro inesperado, tente novamente" });
    }
};

module.exports = {
    findProductByIdController,
    findAllProductController,
    CreateProductController,
    UpdateProductController,
    DeleteProductController
}