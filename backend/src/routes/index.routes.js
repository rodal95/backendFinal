import express from "express"
import { userRouter } from "./api/usuarios.routes.js"
import { authRouter } from "./api/login.routes.js"
import { productRouter } from "./api/productos.routes.js"
const router = express.Router()

router.get("/home",(req,res)=>{
    res.json("hola ruta principal")
})

router.use("/users",userRouter)
router.use("/login",authRouter)
router.use("/productos",productRouter)


export {router as apiRouter}