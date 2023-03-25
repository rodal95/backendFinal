import {getApiDao} from "../models/index.persistence.js"
import {options} from "../config/config.js"

const {OrderDaoContainer} = await getApiDao(options.server.dbType)

export const generateOrder = async(data)=>{
    return await OrderDaoContainer.save(data)
}

export const consultOrder = async (username)=>{
    return await OrderDaoContainer.getAllByUser(username)
}