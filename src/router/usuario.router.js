const router = require("express").Router();
const usuario = require("../controller/usuario.controller.js");

//rotas GET
router.get("/findAll", usuario.findAllController);
router.get("/find/:nome", usuario.findController);
//rotas POST
router.post("/create", usuario.createUsuarioController);
//rotas PUT
router.put("/update/:nome", usuario.updateUsuarioController);
//rotas DELETE
router.delete("/delete/:nome", usuario.deleteUsuarioController);

module.exports = router;