import { Router } from "express";
import { controlPrueba, crearReceta } from "../controllers/recetas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)
router.route("/recetas").post(crearReceta)

export default router;