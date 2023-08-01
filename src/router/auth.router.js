const router = require("express").Router();
const authController = require("../controller/auth.controller.js");

router.post("/login", authController.loginController);

module.exports = router;