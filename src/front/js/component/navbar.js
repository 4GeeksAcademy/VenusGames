import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import pokeballiconVenus from "../../img/pokeballicon03venus.png";
import "../../styles/navbar.css";
import SearchBar from "../pages/SearchBar.jsx";

export const Navbar = () => {
	// const { getStore } = useContext(Context);

	const handleSearch = (searchTerm) => {
		  // Lógica para manejar la búsqueda
		  console.log("Search term:", searchTerm)
		  const filteredPokemons = getStore().pokemon.filter((pokemon) =>
		  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		console.log("Filtered Pokemons:", filteredPokemons);
	};

	return (
		<nav className="navbar navbar-dark d-flex justify-content-space-between mainHeader">
				<div className="Firstbutton">
					<Link to="/login" style={{textDecoration: "none"}}>
						<button className="button" id="navbarButton"><i className="fa-solid fa-user-astronaut loginIcon"></i>  LogIn  </button>
					</Link>
				</div>
				<div className="web-name" >
					<Link to="/">
						<figure className="header__logo">
							<img src={pokeballiconVenus} style={{ height: "65px" }} />
						</figure>
						<span className="navbar-brand mb-0 h1" id="Poketitle">Pokemon Venus</span>
					</Link>
				</div>
				<div className="ml-auto">
					<div className="secondButton">
						<SearchBar onSearch={handleSearch} />
					</div>
				</div>
		</nav>
	);
};


// 		<nav className="navbar navbar">
// 			<div className="container d-flex justify-content-between align-items-center">
// 				<div className="Firstbutton" style={{}}>
// 					<Link to="/login">
// 						<button className="button" id="navbarButton"><i className="fa-solid fa-user-astronaut"></i>  LogIn  </button>
// 					</Link>
// 				</div>

// 				<div className="web-name" >
// 					<Link to="/">
// 						<figure className="header__logo">
// 							<img src={pokeballiconRushing} style={{ height: "55px" }} />
// 						</figure>
// 						<span className="navbar-brand mb-0 h1" id="Poketitle">Pokemon Venus</span>
// 					</Link>
// 				</div>

// 				<div className="secondButton">
// 					<Link to="{/logIn}">
// 						<button className="btn btn-primary" id="navbarButton">Check the Context in action</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };
