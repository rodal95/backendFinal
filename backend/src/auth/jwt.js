import jwt from "jsonwebtoken"

export async function crearToken(data){
    return new Promise((resolve,reject)=>{
        jwt.sign(JSON.stringify(data),"claveSecreta", (err,token)=>{
        if(err) reject(err)
        else resolve(token)
        }) 
    })
} 
export const validarTokenAdmin = (req,res,next)=>{
    const headerToken = req.headers.authorization
    if(!headerToken){
        return res.send("no autorizado")
    }
    const userToken = headerToken.split(" ")[1]
    console.log(userToken)
    jwt.verify(userToken,"claveSecreta",(err,decode)=>{
        if(err) return res.json({message:`token invalido ${err}`})
    })
    const decodeToken=jwt.decode(userToken)
    console.log(decodeToken)
    if(decodeToken.rol === "admin"){
        next()
    }
    else{
        res.json("no tiene autorizacion para esta operacion")
    }
}

export const validarTokenUser = (req,res,next)=>{
    const headerToken = req.headers.authorization
    if(!headerToken){
        return res.send("no autorizado")
    }
    const userToken = headerToken.split(" ")[1]
    jwt.verify(userToken,"claveSecreta",(err,decode)=>{
        if(err) return res.json({message:`token invalido ${err}`})
    })
    const decodeToken=jwt.decode(userToken)
    if(decodeToken.rol === "USER"){
        next()
    }
    else{
        res.json("no tiene autorizacion para esta operacion")
    }
}

export const decodificarToken = (data)=>{
    const decodeToken= jwt.decode(data.split(" ")[1])
    return decodeToken

}