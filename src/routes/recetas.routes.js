import { Router } from "express";
import { controlPrueba, crearReceta, obtenerListaRecetas } from "../controllers/recetas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/recetas").post(crearReceta).get(obtenerListaRecetas)

export default router;