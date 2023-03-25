import express from "express"
import * as cartController from "../../controllers/carritos.controller.js"
import { validarTokenAdmin,validarTokenUser } from "../../auth/jwt.js"
const router = express.Router()

router.get("/",validarTokenUser,cartController.getCartController)
router.put("/:id",validarTokenUser,cartController.agregarProductosCartController)
router.delete("/:id",validarTokenUser,cartController.borrarProductoCarrito)
router.delete("/",validarTokenUser,cartController.borrarCarrito)

export {router as cartRouter}