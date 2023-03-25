import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const cartCollection = "carts"

const cartSchema = new mongoose.Schema({
    email:String,
    productos:[{
        _id:ObjectId,
        nombre:String,
        precio:String,
        cantidad:Number
    }]
},
{
    timestamps:true
})
const carritoModel = mongoose.model(cartCollection,cartSchema)
export {carritoModel}