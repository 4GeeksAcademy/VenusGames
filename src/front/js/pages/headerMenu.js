import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/headerMenu.css";
import FilterBar from "./FilterBar.jsx";
import { Context } from "../store/appContext";

export const HeaderMenu = () => {
    const { actions } = useContext(Context); // Obtener las acciones desde el contexto

    const handleRegionSelect = (region) => {
        actions.getPokemonRegion(region);
    };

    return (
        <div className="hearder-main d-flex justify-content-center align-items-center">
            <FilterBar />
            <div className="headerMenu mt-1" style={{ marginInline: "auto" }}>
                <ul className="region">
					<li className="region-button" onClick={() => handleRegionSelect("kanto")}><Link to="/">Kanto</Link></li>
                    <li className="region-button" onClick={() => handleRegionSelect("johto")}><Link to="/">Johto</Link></li>
                    <li className="region-button" onClick={() => handleRegionSelect("hoenn")}><Link to="/">Hoenn</Link></li>
                    <li className="region-button" onClick={() => handleRegionSelect("sinnoh")}><Link to="/">Sinnoh</Link></li>
                    <li className="region-button" onClick={() => handleRegionSelect("unova")}><Link to="/">Unova/Teselia</Link></li>
                    <li className="region-button" onClick={() => handleRegionSelect("kalos")}><Link to="/">Kalos</Link></li>
                    <li className="region-button" onClick={() => handleRegionSelect("alola")}><Link to="/">Alola</Link></li>
                    <li className="region-button" onClick={() => handleRegionSelect("galar")}><Link to="/">Galar</Link></li>
                </ul>
                <hr/>
            </div>
		</div>
		
    );
};