import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/pokemonView.css";

const PokemonView = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPokemonsList(50);
  }, []);

  return (
    <div>
      <h2>Lista de Pokemons</h2>
      <div className="card-container">
        {store.pokemons.results &&
          store.pokemons.results.length > 0 &&
          store.pokemons.results.map((pokemon, index) => (
            <Link key={index} to={`/pokemon/${index + 1}`} className="card-link">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                  alt={pokemon.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{pokemon.name}</h5>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PokemonView;