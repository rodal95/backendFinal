import {getProducts,saveProduct, deleteProductById,updateProductById} from "../services/productos.service.js"

import {decodificarToken} from "../auth/jwt.js"

export const getProductsController = async (req,res)=>{
    try {
        const respuesta = await getProducts()
        res.status(200).json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error${error}`})
    }

}
export const saveProductController = async (req,res)=>{
    try {
        const newProduct={
            nombre:req.body.nombre,
            precio:req.body.precio,
            stock:req.body.stock
        }
        const respuesta = await saveProduct(newProduct)
        res.json({data:respuesta})
    } catch (error) {
        res.status(400).json({message:`hubo un error${error}`})
    }
}

export const deleteProductId = async (req,res)=>{
    try {
        const idProduct = req.params.id
        const respuesta = await deleteProductById(idProduct)
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).json({message:`hubo un error en controller ${error}`})
    }
}

export const updateProductController = async (req,res)=>{
    try {
        const idProduct = req.params.id
        const modify= req.body
        const respuesta = await updateProductById(idProduct,modify)
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).json({message:`hubo un error en controller ${error}`})
    }
}