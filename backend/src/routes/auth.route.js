import express from "express";
import authCallback from "../controller/auth.controller.js";

const router = express.Router();

console.log("Cargando rutas de auth");

router.post("/callback", authCallback);

export default router;
