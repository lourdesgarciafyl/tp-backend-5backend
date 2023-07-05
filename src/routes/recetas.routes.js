import { Router } from "express";
import { borrarReceta, controlPrueba, crearReceta, editarReceta, obtenerListaRecetas, obtenerReceta } from "../controllers/recetas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/recetas").post(crearReceta).get(obtenerListaRecetas)
router.route("/recetas/:id").get(obtenerReceta).delete(borrarReceta).put(editarReceta)

export default router;