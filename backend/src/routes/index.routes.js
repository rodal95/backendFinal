import express from "express"
import { userRouter } from "./api/usuarios.routes.js"
const router = express.Router()

router.get("/home",(req,res)=>{
    res.json("hola ruta principal")
})

router.use("/users",userRouter)

export {router as apiRouter}