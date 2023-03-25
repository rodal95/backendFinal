import {MongoClient} from "./client/dbClientMongo.js"

import {usuarioModel} from "./dbmodels/usuarios.model.js"
import {productosModel} from "./dbmodels/productos.model.js"


export async function getApiDao(dbType){
    let UserDaoContainer
    let ProductDaoContainer

    switch(dbType){
        case 'MONGO':
            const {UserMongoDao} = await import("../models/daos/usuarios/usuariosMongoDao.js")
            const {ProductosMongoDao} = await import("../models/daos/productos/productosMongoDao.js")
            const client = new MongoClient()
            await client.connect()
            UserDaoContainer = new UserMongoDao(usuarioModel)
            ProductDaoContainer = new ProductosMongoDao(productosModel)
            break;
        case 'MYSQL':

            break;
        default:
            break;
    }
    return {UserDaoContainer, ProductDaoContainer}
}

