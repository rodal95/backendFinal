import {getUsers,saveUser,getUser,deleteUsers} from "../services/usuarios.service.js"
import  {crearToken, decodificarToken}  from "../auth/jwt.js"
import {logger} from "../logger.js"
import { transporterEmail, emailAdmin } from "../messages/nodemailer.js"
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
        logger.info("usuario registrado en base de datos")
        transporterEmail.sendMail({
            from:"ProyectoBackend",
            to:emailAdmin,
            subject:"nuevo Registro",
            text:`el usuario ${newUser.nombre} ${newUser.apellido} se registro correctamente`
        })
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
            logger.info("usuario logueado con exito")
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