import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/pokemonView.css";

const PokemonView = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPokemonsList('https://pokeapi.co/api/v2/ability/?limit=50&offset=50'); //no esta funcionando el 50
  }, []);

  return (
    <div>
      <div className="card-container">
        {store.pokemons.results &&
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
                  <h5 className="number">{pokemon.id}</h5>
                  <h4 className="card-title">{pokemon.name}</h4>
                  <h5 className="card-type">{pokemon.type}</h5> 
                  {/* no funciona el id y type por alguna razon */}
                </div>
              </div>
            </Link>
          )})}
      </div>
    </div>
  );
};

export default PokemonView;