import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        minLength: 1,
        maxLength: 100
    },
    ingredientes:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 500
    },
    dificultad:{
        type: String,
        required: true,
    },
    tiempo:{
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 3,
        min: 1,
        max: 200
    },
    instrucciones:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 1500
    },
    imagen:{
        type: String,
        required: true
    }
})

const Receta = mongoose.model("receta", recetaSchema);
export default Receta;