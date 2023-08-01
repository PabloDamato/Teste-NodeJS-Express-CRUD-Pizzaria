const Pizza = require("../model/Produto");

const findProductByIdService = (id) => {
    return Pizza.findById(id);
}

const findAllProductService = () => {
    return Pizza.find();
}

const CreateProductService = (body) => {
    return Pizza.create(body);
}

const UpdateProductService = (id, body) => {
    return Pizza.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const DeleteProductService = (id) => {
    return Pizza.findByIdAndRemove(id);
}

module.exports = {
    findProductByIdService,
    findAllProductService,
    CreateProductService,
    UpdateProductService,
    DeleteProductService
}