import {generateOrder, consultOrder} from "../services/ordenes.service.js"
import { getCartById } from "../services/carritos.service.js"
import {decodificarToken} from "../auth/jwt.js"

export const generarOrdenController = async (req,res)=>{
    try {
        const idCarrito = req.params.id
        const carrito = await getCartById(idCarrito)
        console.log(carrito)
        const newOrder = {
            email:carrito.email,
            cartId:carrito._id,
            productos:carrito.productos
        }
        const respuesta = await generateOrder(newOrder)
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error${error}`})
    }
}

export const consultarOrdenController = async (req,res)=>{
    try {
        const usuario = decodificarToken(req.headers.authorization)
        const respuesta = await consultOrder(usuario.email)
        if(respuesta.length === 0){
            res.status(200).json({message:"no hay pedidos realizados"})
        }else{
            res.status(200).json({data:respuesta})
        }
        
    } catch (error) {
        res.status(400).json({message:`hubo un error${error}`})
    }
}