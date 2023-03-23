/* import {MongoContainer} from "./manager/mongo.manager.js"
import {usuarioModel} from "./models/usuarios.model.js"

const userManager = new MongoContainer(usuarioModel)
export {userManager} */


import {usuarioModel} from "./dbmodels/usuarios.model.js"
import {MongoClient} from "./client/dbClientMongo.js"

export async function getApiDao(dbType){
    let UserDaoContainer


    switch(dbType){
        case 'MONGO':
            const {UserMongoDao} = await import("../models/daos/usuarios/usuariosMongoDao.js")
            const {ProductosMongoDao} = await import("../models/daos/productos/productosMongoDao.js")
            const client = new MongoClient()
            await client.connect()
            UserDaoContainer = new UserMongoDao(usuarioModel)
            break;
        case 'MYSQL':

            break;
        default:
            break;
    }
    return {UserDaoContainer}
}

