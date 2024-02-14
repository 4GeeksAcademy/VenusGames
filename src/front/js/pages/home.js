import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);


	useEffect(() => {
		actions.getPokemonsList()
	}, []);

	return (

		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<div>
				{store.pokemons && store.pokemons.map(pokemon => (
					<div key={pokemon.id}>
						<p>{pokemon.name}</p>
						{/* Mostrar otras propiedades del Pokémon, como stats, habilidades, etc. */}
					</div>
				))}
			</div>
		</div>
	);
};
