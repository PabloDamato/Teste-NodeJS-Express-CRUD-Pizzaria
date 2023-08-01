const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique:true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;
