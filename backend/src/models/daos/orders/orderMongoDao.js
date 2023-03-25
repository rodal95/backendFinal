import {MongoContainer} from "../../manager/mongo.manager.js"

class OrderMongoDao extends MongoContainer{
    constructor(model){
        super(model)
    }
}

export {OrderMongoDao}


