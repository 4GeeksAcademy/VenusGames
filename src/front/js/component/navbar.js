import React from "react";
import { Link } from "react-router-dom";
import pokeballiconVenus from "../../img/pokeballicon03venus.png";
import pokeballiconRushing from "../../img/pokeballicon02.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (

		<nav className="navbar navbar">
			<div className="container d-flex justify-content-between align-items-center">
				<div className="Firstbutton" style={{}}>
					<Link to="/login">
						<button className="button" id="navbarButton"><i className="fa-solid fa-user-astronaut"></i>  LogIn  </button>
					</Link>
				</div>

				<div className="web-name" >
					<Link to="/">
						<figure className="header__logo">
							<img src={pokeballiconRushing} style={{ height: "55px" }} />
						</figure>
						<span className="navbar-brand mb-0 h1" id="Poketitle">Pokemon Venus</span>
					</Link>
				</div>

				<div className="secondButton">
					<Link to="{/logIn}">
						<button className="btn btn-primary" id="navbarButton">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
