import express from "express"
import {options} from "./config/config.js"
import { apiRouter } from "./routes/index.routes.js"

const app = express()
const PORT = options.server.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",apiRouter)

app.listen(PORT, ()=>{
    console.log("server listening on port: ",PORT)
})

app.get("/",(req,res)=>{
    res.send("bienvenido al server")
})