import mongoose from "mongoose";
import {options} from "../../config/config.js"

class MongoClient{
    constructor(){
        this.client = mongoose
    }
    async connect(){
        try {
            await this.client.connect(options.mongoDB.mongoURL)
            console.log("conexion exitosa a base de datos")
        } catch (error) {
            throw new Error(`hubo un error${error}`)
        }
    }
    async disconnect(){
        try {
            await this.client.connection.close()
            console.log("desconexion exitosa a base de datos")
        } catch (error) {
            throw new Error(`hubo un error${error}`)
        }
    }
}

export {MongoClient}