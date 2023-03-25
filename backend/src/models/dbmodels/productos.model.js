import mongoose from "mongoose";

const productCollection = "products"

const productSchema = new mongoose.Schema({
    nombre:String,
    precio:String,
    stock:String
},
{
    timestamps:true
})
const productosModel = mongoose.model(productCollection,productSchema)
export {productosModel}