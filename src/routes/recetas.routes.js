import { Router } from "express";
import { borrarReceta, controlPrueba, crearReceta, editarReceta, obtenerListaRecetas, obtenerReceta } from "../controllers/recetas.controllers";
import validarReceta from "../helpers/validarReceta";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/recetas").post(validarReceta ,crearReceta).get(obtenerListaRecetas)
router.route("/recetas/:id").get(obtenerReceta).delete(borrarReceta).put(validarReceta ,editarReceta)

export default router;