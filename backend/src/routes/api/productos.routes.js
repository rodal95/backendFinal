import express from "express"
import * as productController from "../../controllers/productos.controller.js"
import { validarTokenAdmin,validarTokenUser } from "../../auth/jwt.js"
const router = express.Router()

router.get("/all",productController.getProductsController)
router.get("/:id",productController.getProductController)
router.post("/",validarTokenAdmin,productController.saveProductController)
router.post("/agregarCarrito/:id",)
router.delete("/:id",validarTokenAdmin, productController.deleteProductId)
router.put("/:id",validarTokenAdmin,productController.updateProductController)


export {router as productRouter}