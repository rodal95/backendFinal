import {MongoClient} from "./client/dbClientMongo.js"

import {usuarioModel} from "./dbmodels/usuarios.model.js"
import {productosModel} from "./dbmodels/productos.model.js"
import {carritoModel} from "./dbmodels/carritos.model.js"
import {orderModel} from "./dbmodels/ordenes.model.js"

export async function getApiDao(dbType){
    let UserDaoContainer
    let ProductDaoContainer
    let CartDaoContainer
    let OrderDaoContainer

    switch(dbType){
        case 'MONGO':
            const {UserMongoDao} = await import("../models/daos/usuarios/usuariosMongoDao.js")
            const {ProductosMongoDao} = await import("../models/daos/productos/productosMongoDao.js")
            const {CartMongoDao} = await import("../models/daos/carritos/carritosMongoDao.js")
            const {OrderMongoDao} = await import("../models/daos/orders/orderMongoDao.js")
            const client = new MongoClient()
            await client.connect()
            UserDaoContainer = new UserMongoDao(usuarioModel)
            ProductDaoContainer = new ProductosMongoDao(productosModel)
            CartDaoContainer = new CartMongoDao(carritoModel)
            OrderDaoContainer = new OrderMongoDao(orderModel)
            break;
        case 'MYSQL':

            break;
        default:
            break;
    }
    return {UserDaoContainer, ProductDaoContainer, CartDaoContainer,OrderDaoContainer}
}

