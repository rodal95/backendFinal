import {getUsers,saveUser} from "../services/usuarios.service.js"

export const getUsersController = async (req,res)=>{
    try {
        const respuesta = await getUsers()
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}

export const saveUserController = async (req,res)=>{
    try {
        const respuesta = await saveUser(req.body)
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}

export const getUserByUserName = async (req,res)=>{
    try {
        const respuesta = await getUserByUserName(req.body.email)
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`)
    }
}