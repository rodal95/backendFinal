import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const orderCollection = "orders"

const orderSchema = new mongoose.Schema({
    email:String,
    cartId:ObjectId,
    productos:Array
},
{
    timestamps:true
})
const orderModel = mongoose.model(orderCollection,orderSchema)
export {orderModel}