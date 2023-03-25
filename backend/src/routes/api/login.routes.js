import express from "express"
import * as userController from "../../controllers/usuarios.controller.js"
const router = express.Router()

router.post("/login",userController.getTokenUserController)
router.post("/signin",userController.saveUserController)

export {router as authRouter}
