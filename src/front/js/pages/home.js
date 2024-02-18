import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import PokemonView from "./PokemonView.jsx";
import { HeaderMenu } from "./headerMenu.js";
import Footer from "../component/footer.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [next, setNext] = useState(store.pokeApiUrl + "/pokemon");
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
		<>
			 {/* <div className="text-center mt-5">
			<div> */}
				<HeaderMenu />
			 {/* </div>
			 <div> */}
				<PokemonView />
			 {/* </div> */}
			<div className="nextPrevious-container">
				<button className="nextPrevious" onClick={handleNextClick}> Next <i className="fa-solid fa-sort-down"></i></button>
				{previous && <button className="nextPrevious" onClick={handlePreviousClick} style={{marginLeft: "15px"}}> Previous <i className="fa-solid fa-sort-down fa-bounce"></i></button>}
			</div>
		 {/* </div> */}
		 <Footer/>
		</>
	);
};