import {getUsers,saveUser,getUser,deleteUsers} from "../services/usuarios.service.js"
import  {crearToken, decodificarToken}  from "../auth/jwt.js"
import bcrypt from "bcrypt"



export const getUsersController = async (req,res)=>{
    try {
        const respuesta = await getUsers()
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}
export const getUserController = async (req,res)=>{
    try {
        const usuarioPerfil = decodificarToken(req.headers.authorization)
        console.log(usuarioPerfil._id)
        const respuesta = await getUser(usuarioPerfil.email)
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}
export const saveUserController = async (req,res)=>{
    try {
        const newUser={
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            rol:req.body.rol || "USER",
            password:bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
        }
        const respuesta = await saveUser(newUser)
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}
export const getTokenUserController = async (req,res)=>{
    try {
        const respuesta = await getUser(req.body.email)
        if(bcrypt.compareSync(req.body.password, respuesta.password)){
            const token = await crearToken(respuesta)
            res.status(200).json(token)
        }
        else{
            res.status(400).json("usuario o clave invalida")
        }
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}

export const deleteUsersController = async (req,res)=>{
    try {
        const respuesta = await deleteUsers()
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}