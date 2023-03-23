/* import {userManager} from "../dbOperations/index.persistence.js" */
import {getApiDao} from "../models/index.persistence.js"
import {options} from "../config/config.js"

const {UserDaoContainer} = await getApiDao(options.server.dbType)

export const getUsers = async ()=>{
    return await UserDaoContainer.getAll()
}

export const saveUser = async (body)=>{
    return await UserDaoContainer.save(body)
}

export const getUserByUserName = async (username)=>{
    return await UserDaoContainer.findByUserName(username)
}

