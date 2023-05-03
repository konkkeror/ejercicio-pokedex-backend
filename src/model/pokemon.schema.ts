import mongoose  from "mongoose";
import { Evolution, Pokemon, Gender } from "./pokemon.model";

const schema = new mongoose.Schema<Pokemon>({
  _id: mongoose.Types.ObjectId,
  id:             Number,
  gender:         String,
  num:            String,
  name:           String,
  img:            String,
  type:           Array<String>,
  height:         String,
  weight:         String,
  candy:          String,
  candy_count:    Number,
  egg:            String,
  spawn_chance:   Number,
  avg_spawns:     Number,
  spawn_time:     String,
  multipliers:    Array<Number>,
  weaknesses:     Array<String>,
  prev_evolution: Array<Evolution>,
  next_evolution: Array<Evolution>,
});

export const PokemonSchema = mongoose.model('pokemones',schema);
