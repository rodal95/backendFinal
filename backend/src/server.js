import express from "express"
import session from "express-session"
import passport from "passport"
import {options} from "./config/config.js"
import { apiRouter } from "./routes/index.routes.js"
import  jwt from "jsonwebtoken"
const app = express()
const PORT = options.server.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",apiRouter)
/* app.use(passport.initialize())
app.use(passport.session()) */

app.listen(PORT, ()=>{
    console.log("server listening on port: ",PORT)
})
/* conexion a base de datos */

jwt.

app.get("/",(req,res)=>{
    res.send("bienvenido al server")
})