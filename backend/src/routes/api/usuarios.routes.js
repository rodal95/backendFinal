import express from "express"
import * as userController from "../../controllers/usuarios.controller.js"
import { validarTokenAdmin,validarTokenUser } from "../../auth/jwt.js"
const router = express.Router()

router.get("/all",validarTokenAdmin,userController.getUsersController)
router.get("/perfil",validarTokenUser,userController.getUserController)
router.delete("/",validarTokenAdmin,userController.
deleteUsersController)

export {router as userRouter}