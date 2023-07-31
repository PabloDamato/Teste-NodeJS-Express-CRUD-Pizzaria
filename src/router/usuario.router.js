const router = require("express").Router();
const usuario = require("../controller/usuario.controller.js");

//rotas GET
router.get("/findAll", usuario.findAllController);
router.get("/findByID/:id", usuario.findController);
//rotas POST
router.post("/create", usuario.createUsuarioController);
//rotas PUT
router.put("/update/:id", usuario.updateUsuarioController);
//rotas DELETE
router.delete("/delete/:id", usuario.deleteUsuarioController);

module.exports = router;