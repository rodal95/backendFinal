import { createCart, deleteCart, getCart,updateCart } from "../services/carritos.service.js"
import { getProduct } from "../services/productos.service.js"
import { decodificarToken } from "../auth/jwt.js"


export const getCartController = async (req,res)=>{
    try {
        const usuario = decodificarToken(req.headers.authorization)
        const respuesta = await getCart(usuario.email)
        if(respuesta === null){
            res.status(200).json("no hay productos en el carrito, agregue uno para crear un carrito")
        }else{
            res.status(200).json({data:respuesta})}
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}

export const agregarProductosCartController = async (req,res)=>{
    try {
        const usuario = decodificarToken(req.headers.authorization)
        const respuesta = await getCart(usuario.email)
        const producto = await getProduct(req.params.id)
        if(respuesta === null){
            let products = []
            products.push(producto)
            const newCart = {
                email:usuario.email,
                productos:products
            }
            const nuevoCart = await createCart(newCart)
            res.status(200).json({message:`se creo un carrito nuevo con producto ${nuevoCart}`})
        }else{
            let products = respuesta.productos
            products.push(producto)
            const update = await updateCart(respuesta._id,{productos:products})
            res.status(200).json({message:`se actualizo un carrito ${update}`})}
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}
export const borrarProductoCarrito = async (req,res)=>{
    try {
        const usuario = decodificarToken(req.headers.authorization)
        const respuesta = await getCart(usuario.email)
        const nuevosProductos=respuesta.productos.filter(element => element.id != req.params.id)
        const update = await updateCart(respuesta._id,{productos:nuevosProductos})
        res.status(200).json({message:`se boror un producto de carrito`})
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}
export const borrarCarrito = async (req,res)=>{
    try {
        const usuario = decodificarToken(req.headers.authorization)
        const respuesta = await deleteCart(usuario.email)
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).json({message:`hubo un error ${error}`})
    }
}