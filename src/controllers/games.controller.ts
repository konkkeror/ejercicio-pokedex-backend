import { Request, Response } from "express";
import { PokemonMastersSchema } from "../model/pokemon-master.schema";
import mongoose, {ObjectId}  from "mongoose";

export const nuevoJuego = (req: Request, res: Response) => {

  // Objetivo: Saber quien ganó y almacenar la partida
  // Información que necesito: 
      // ID player1
      // ID player2
      // ID Pokemon1
      // ID Pokemon2

  // Obtener el detalle de player1, player2, pokemon1, pokemon2
  // Comparar debilidades (weaknesses) vs Tipo (type)
  // Decidir quien gana
  // Armar el objeto de la partida
  // Almacenarlo en la coleccion games.

  res.send("Nueva partida");
  res.end();
  // PokemonMastersSchema.find({}, {firstName: true, lastName: true, img: true, level: true})
	// 	.then((result) => {
	// 		res.send({message: 'Maestros pokemon',result});
	// 		res.end();
	// 	})
	// 	.catch((error) => {
  //     res.send(error);
	// 		res.end();
  //   });
}