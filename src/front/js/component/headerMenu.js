import React from "react";
import { Link } from "react-router-dom";
import "../../styles/headerMenu.css";

export const HeaderMenu = () => {
    return (
		<div className="headerMenu">
				<ul className="region">
				<li><Link to="/">Kanto</Link></li>
					<li><Link to="/">Johto</Link></li>
					<li><Link to="/">Hoenn</Link></li>
					<li><Link to="/">Sinnoh</Link></li>
					<li><Link to="/">Unova/Teselia</Link></li>
					<li><Link to="/">Kalos</Link></li>
					<li><Link to="/">Alola</Link></li>
					<li><Link to="/">Galar</Link></li>
					<li><Link to="/">Palea</Link></li>
				</ul>
		</div>
	);
}