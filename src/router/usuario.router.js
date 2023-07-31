const router = require("express").Router();
const usuario = require("../controller/usuario.controller.js");

//rotas GET
router.get("/findAll", usuario.findAll);
router.get("/find/:nome", usuario.find);
//rotas POST
router.post("/create", usuario.createUsuario);
//rotas PUT
router.put("/update/:nome", usuario.updateUsuario);
//rotas DELETE
router.delete("/delete/:nome", usuario.deleteUsuario);

module.exports = router;