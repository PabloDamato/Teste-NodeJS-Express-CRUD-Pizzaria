const router = require("express").Router();
const usuario = require("../controller/usuario.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");

//rotas GET
router.get("/findAll", authMiddleware, usuario.findAllController);
router.get("/findByID/:id", authMiddleware, usuario.findController);
//rotas POST
router.post("/create", usuario.createUsuarioController);
//rotas PUT
router.put("/update/:id", usuario.updateUsuarioController);
//rotas DELETE
router.delete("/delete/:id", usuario.deleteUsuarioController);

module.exports = router;