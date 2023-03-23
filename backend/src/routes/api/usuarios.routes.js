import express from "express"
import * as userController from "../../controllers/usuarios.controller.js"
const router = express.Router()

router.get("/",userController.getUsersController)
router.post("/", userController.saveUserController)
export {router as userRouter}