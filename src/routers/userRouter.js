const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const uploadFile = require("../middlewares/uploadAvatar")
const registerValidator = require("../validations/registerValidator")
const loginValidator = require("../validations/loginValidator")
const userInSession = require("../middlewares/userInSession")
/* const perfilValidator = require("../validations/") */

// GET- ruta login
router.get("/login", userInSession, userController.login)
// POST - ruta login
router.post("/login", loginValidator, userController.loginProcess)
// GET - ruta register
router.get("/registro", userInSession, userController.register)
// GET - ruta registrado
router.get("/registro/correctamente", userInSession, userController.registrado)
// GET - ruta recuperar passwd
router.get("/olvide-mi-passwd",  userInSession, userController.recPasswd)
// GET - Perfil User
router.get("/perfil",  userController.perfilUser)
// /* POST - Ruta crear nuevo registro de usuario*/
router.post("/registro", uploadFile.single("avatar"), registerValidator,userController.processRegister)
// GET - Cerrar sesion
router.get("/logout", userController.logOut)

/* PERFIL */

/* router.get("/perfil", /* userInSession,  userController.perfil); */
/* router.get("/perfil/editar/:id", userInSession, userController.perfilEdit); */
/* router.put("/perfil/editar/:id", uploadFile.single('avatar'),  /* -profileValidator-,   userInSession, userController.perfilActualizado) */

module.exports = router