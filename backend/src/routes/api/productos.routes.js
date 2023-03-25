import express from "express"
import * as productController from "../../controllers/productos.controller.js"
const router = express.Router()

router.get("/all",productController.getProductsController)
router.post("/",productController.saveProductController)
router.delete("/:id", productController.deleteProductId)
router.put("/:id",productController.updateProductController)
export {router as productRouter}