import React from "react";
import { Link } from "react-router-dom";
import pokeballiconVenus from "../../img/pokeballicon03venus.png";
import pokeballiconRushing from "../../img/pokeballicon02.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (

		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/login">
					<button className="btn btn-primary"><i className="fa-solid fa-user-astronaut"></i>  LogIn  </button>
				</Link>

				<div className="web-name" >
					<Link to="/">
						<figure className="header__logo">
							<img src={pokeballiconVenus} style={{ height: "80px" }} />
						</figure>
						<span className="navbar-brand mb-0 h1">Pokemon Venus</span>
					</Link>
				</div>

				<div className="ml-auto">
					<Link to="{/logIn}">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
