import {generateOrder, consultOrder} from "../services/ordenes.service.js"
import { getCartById , deleteCart} from "../services/carritos.service.js"
import {decodificarToken} from "../auth/jwt.js"
import { logger } from "../logger.js"
import {transporterEmail, emailAdmin} from "../messages/nodemailer.js"

export const generarOrdenController = async (req,res)=>{
    try {
        const usuario = decodificarToken(req.headers.authorization)
        const idCarrito = req.params.id
        const carrito = await getCartById(idCarrito)

        const newOrder = {
            email:usuario.email,
            cartId:carrito._id,
            productos:carrito.productos
        }
        const respuesta = await generateOrder(newOrder)
        await deleteCart(carrito.email)
        transporterEmail.sendMail({
            from:"ProyectoBackend",
            to:emailAdmin,
            subject:"nueva compra",
            text:`el usuario ${usuario.nombre} ${usuario.apellido} realizo la siguiente compra.
            ${newOrder}`
        })
        transporterEmail.sendMail({
            from:"ProyectoBackend",
            to:carrito.email,
            subject:"Compra Realizada",
            text:`Usted realizo la compra de 
            ${newOrder} comuniquese a la brevedad para pactar entrega`
        })
        logger.info("compra realizada con exito")
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