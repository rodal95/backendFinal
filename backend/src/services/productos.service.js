import {getApiDao} from "../models/index.persistence.js"
import {options} from "../config/config.js"

const {ProductDaoContainer} = await getApiDao(options.server.dbType)

export const getProducts = async ()=>{
    return await ProductDaoContainer.getAll()
}
export const getProduct = async (id)=>{
    return await ProductDaoContainer.getById(id)
}
export const saveProduct = async (body)=>{
    return await ProductDaoContainer.save(body)
}

export const deleteProductById = async (id)=>{
    return await ProductDaoContainer.deleteById(id)
}

export const updateProductById = async (id,modificacion)=>{
    return await ProductDaoContainer.putById(id,modificacion)
}