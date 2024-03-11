import React from "react";
import Products from "./Products.jsx";
import BlackPokemonBackground from "../../img/Black-Pokemon-Background.jpg"
import GreenPokemonBackground from "../../img/GreenPokemonBackground.jpg"
import "../../styles/Pokemarket.css";
import { Link } from "react-router-dom";

const PokeMarket = () => {
  
  return (
        <div className="PokeMarket">
          <nav className="navbar navbar-dark d-flex justify-content-space-between" style={{backgroundColor: "#38254a", paddingInline: "20px"}}>
            <Link to="/" style={{ textDecoration: "none", color: "#d4d1f9" }}> Pokemons </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#d1f9d8" }}> Your orders </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#d4d1f9" }}> Your Favorites </Link>
            <Link to="/" style={{ textDecoration: "none", color: "#d1f9d8" }}> ShoppingCart </Link>
          </nav>

          

          <div className="Introduccion">
            <img src={BlackPokemonBackground} style={{maxWidth: "100%"}}/>
            <div className="texto-encima">Welcome to our Poke-Market! Feel free to browse and if you find anything interesting dont forget to create an account so you can save it in your cart.</div>
          </div>

          <div className="Products">
            <Products/>
          </div>


        </div>
    );
}

export default PokeMarket;