import {MongoContainer} from "../../manager/mongo.manager.js"

class ProductosMongoDao extends MongoContainer{
    constructor(model){
        super(model)
    }
}

export {ProductosMongoDao}


