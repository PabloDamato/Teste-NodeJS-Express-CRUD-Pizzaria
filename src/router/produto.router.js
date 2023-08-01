const router = require("express").Router();

const pizzaController = require("../controller/produto.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");

router.get("/find/:id", authMiddleware ,pizzaController.findProductByIdController);
router.get("/findAll", authMiddleware ,pizzaController.findAllProductController);

router.post("/create", authMiddleware ,pizzaController.CreateProductController);

router.put("/update/:id", authMiddleware ,pizzaController.UpdateProductController);

router.delete("/delete/:id", authMiddleware ,pizzaController.DeleteProductController);

module.exports = router;