import {getApiDao} from "../models/index.persistence.js"
import {options} from "../config/config.js"

const {UserDaoContainer} = await getApiDao(options.server.dbType)


export const getUsers = async ()=>{
    return await UserDaoContainer.getAll()
}

export const saveUser = async (body)=>{
    return await UserDaoContainer.save(body)
}

export const getUser = async (username)=>{
    return await UserDaoContainer.findByUser(username)
}

export const deleteUsers = async ()=>{
    return await UserDaoContainer.deleteAll()
}