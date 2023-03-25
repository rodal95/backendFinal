import express from "express"
import * as orderController from "../../controllers/order.controller.js"
import { validarTokenAdmin,validarTokenUser } from "../../auth/jwt.js"
const router = express.Router()


router.get("/consultarOrdenes/",validarTokenUser,orderController.consultarOrdenController)

router.post("/generarOrden/:id",validarTokenUser,orderController.generarOrdenController)

export {router as orderRouter}