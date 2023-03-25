import {getApiDao} from "../models/index.persistence.js"
import {options} from "../config/config.js"

const {CartDaoContainer} = await getApiDao(options.server
    .dbType)

export const getCart = async (username)=>{
    return await CartDaoContainer.findByUser(username)
}

export const createCart = async (data)=>{
    return CartDaoContainer.save(data)
}

export const updateCart = async (id,modificacion)=>{
    return CartDaoContainer.putById(id,modificacion)
}
export const deleteCart = async (username)=>{
    return CartDaoContainer.deleteByUser(username)
}
export const getCartById = async (id)=>{
    return await CartDaoContainer.getById(id)
}