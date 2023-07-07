import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarReceta = [
    check("nombre")
    .notEmpty()
    .withMessage("El nombre de la receta es un campo obligatorio")
    .isString()
    .isLength({min: 1, max:100}),
    check("ingredientes")
    .notEmpty()
    .withMessage("Campo de ingredientes obligatorio")
    .isString()
    .isLength({min: 3, max:500}),
    check("dificultad")
    .notEmpty()
    .withMessage("La dificultad es una dato obligatorio")
    .isIn(["facil", "intermedio", "dificil"])
    .withMessage("La dificultad debe ser una opción válida"),
    check("tiempo")
    .notEmpty()
    .withMessage("El tiempo es un campo obligatorio")
    .isNumeric()
    .custom((value) =>{
        if(value >= 1 && value <= 200){
            return true;
        }else{
            throw new Error("El tiempo debe estar entre 1 y 200 minutos")
        }
    }),
    check("instrucciones")
    .notEmpty()
    .withMessage("Este es un campo obligatorio")
    .isString()
    .isLength({min: 3, max:1500}),
    check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    // recordar cambiar la exp reg de la imagen en el CRUD FRONTEND!!
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/)
    .withMessage("Debe ingresar un link terminado en jpg, gif o png"),
    (req, res, next) => {resultadoValidacion(req, res, next)}
]

export default validarReceta;