import { Router } from "express";
import { controlPrueba } from "../controllers/recetas.controllers";

const router = Router();
router.route("/prueba").get(controlPrueba)

export default router;