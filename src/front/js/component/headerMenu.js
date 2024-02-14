import React from "react";
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
    return (

		<nav className="navbar navbar">
			<div className="container">
				<Link to="/login">
					<button className="btn btn-primary"><i className="fa-solid fa-user-astronaut"></i>  LogIn  </button>
				</Link>

				<div className="ml-auto">
					<Link to="{/logIn}">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}