import Receta from "../models/receta"

export const controlPrueba = (req, res) => {
    res.send("Esta es una prueba de mi ruta get")
}

export const crearReceta = async (req, res) => {
    try{
        const recetaNueva = new Receta(req.body);
        await recetaNueva.save();
        res.status(201).json({
            mensaje: "La receta fue creada correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo crear la receta"
        })
    }
}

export const obtenerListaRecetas = async (req, res) =>{
    try{
        const recetas = await Receta.find();
        res.status(200).json(recetas)
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "Error. No se pudo obtener la lista de recetas"
        })
    }
}

export const obtenerReceta = async (req, res) => {
    try{
        const receta = await Receta.findById(req.params.id);
        res.status(200).json(receta);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "Error. No se pudo obtener la receta"
        })
    }
}