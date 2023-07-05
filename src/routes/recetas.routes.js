import { Router } from "express";
import { controlPrueba, crearReceta, obtenerListaRecetas, obtenerReceta } from "../controllers/recetas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/recetas").post(crearReceta).get(obtenerListaRecetas)
router.route("/recetas/:id").get(obtenerReceta)

export default router;