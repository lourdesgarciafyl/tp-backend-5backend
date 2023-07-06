import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 100
    },
    ingredientes:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 500
    },
    dificultad:{
        type: String,
        required: true,
    },
    tiempo:{
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 3,
        min: 1,
        max: 200
    },
    instrucciones:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 1500
    },
    imagen:{
        type: String,
        required: true
    }
})

const Receta = mongoose.model("receta", recetaSchema);
export default Receta;