import express from "express";
import { addPokemonToMaster, getPokemonMasters, getPokemonMaster } from "../controllers/pokemon-masters.controller";

const router = express.Router();

router.get("/", getPokemonMasters);
router.get("/:id", getPokemonMaster);
router.put("/:id/pokemons", addPokemonToMaster);

export default router;