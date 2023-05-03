import express from "express";
import { nuevoJuego } from "../controllers/games.controller";


const router = express.Router();

router.post("/", nuevoJuego);

export default router;


// GET  localhost:3002/games
// POST  localhost:3002/games