import express from "express";
import { addPokemon, deletePokemon, getPokemon, getPokemones, updatePokemon } from "../controllers/pokemones.controller";

const router = express.Router();

router.get("/", getPokemones);
router.get("/:id", getPokemon);
router.post("/", addPokemon);
router.put("/:id", updatePokemon);
router.delete("/:id", deletePokemon);

export default router;