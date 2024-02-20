import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/pokemonView.css";

const PokemonView = () => {
  const { store, actions } = useContext(Context);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    actions.getPokemonsList('https://pokeapi.co/api/v2/pokemon/?limit=50'); //no esta funcionando el 50
  }, []);

// Este efecto se ejecutará cada vez que cambie la región seleccionada
useEffect(() => {
    // Verificar si hay una región seleccionada antes de cargar los Pokémon de esa región
    if (store.selectedRegion) {
        actions.getPokemonRegion(store.selectedRegion);
    }
}, [store.selectedRegion]); // Esto se ejecutará cada vez que store.selectedRegion cambie


  return (
    <div>

      <div className="card-container">
        {store.pokemons?.results &&
          store.pokemons.results.length > 0 &&
          store.pokemons.results.map((pokemon, index) => {
            let arr = pokemon.url.split('/')
            let id = arr[arr.length -2]
            return (

            <Link key={index} to={`/pokemon/${pokemon.name}`} className="card-link">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  alt={pokemon.name}
                />
                <div className="card-body">
                  <h4 className="card-title">{pokemon.name}</h4>
                </div>
              </div>
            </Link>
          )})}
      </div>
    </div>
  );
};

export default PokemonView;