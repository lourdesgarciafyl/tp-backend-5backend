import mongoose, { mongo } from "mongoose";

const uri = "mongodb://127.0.0.1:27017/crudrecetas" 
mongoose.connect(uri)

const datosConexion = mongoose.connection;

datosConexion.once("open", ()=>{
    console.log("Conexión exitosa a la base de datos")
})