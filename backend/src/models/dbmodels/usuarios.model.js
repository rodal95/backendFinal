import mongoose from "mongoose";

const userCollection = "users"

const userSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String,
    rol:String,
    password:String
},
{
    timestamps:true
})
const usuarioModel = mongoose.model(userCollection,userSchema)
export {usuarioModel}