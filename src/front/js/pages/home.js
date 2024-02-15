import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import PokemonView from "../component/PokemonView.jsx";
import { HeaderMenu } from "../component/headerMenu.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [next, setNext] = useState(store.pokeApiUrl+"/pokemon");
	const [previous, setPrevious] = useState(null);


	useEffect(() => {
		actions.getPokemonsList(next)
	}, [next]);

	useEffect(() => {
		setPrevious(store.pokemons.previous); // Actualizamos el estado de previous cuando cambia store.pokemons
	}, [store.pokemons.previous]);

	const handleNextClick = () => {
		setNext(store.pokemons.next); // Actualizamos next con la URL del siguiente conjunto de resultados
	};

	const handlePreviousClick = () => {
		setNext(previous); // Actualizamos next con la URL del conjunto de resultados anterior
	};

	return (
		<div className="text-center mt-5">
			<div>
				<HeaderMenu/>
			</div>
			<div>
				<PokemonView />
			</div>


			<button className="btn btn-primary" onClick={handleNextClick}> Next </button>
			{previous && <button className="btn btn-primary" onClick={handlePreviousClick}> Previous </button>}
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
		</div>
	);
};