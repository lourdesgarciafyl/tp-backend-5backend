import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const Usuario = mongoose.model(`usuario`, usuarioSchema);

export default Usuario;