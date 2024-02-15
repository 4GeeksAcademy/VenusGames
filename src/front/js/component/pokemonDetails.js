import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const PokemonDetails = () => {
  const { store, actions } = useContext(Context);
  const { name } = useParams();
  

  useEffect(() => {
    actions.getPokemonDetails(name);
  }, [name]);

  return (
    <div>
      <h2>Detalles del Pokémon {name}</h2>
      {/* Aquí puedes mostrar los detalles del Pokémon */}
      <div>
        {store.pokemon && (
          <div>
            <h3>{store.pokemon.name}</h3>
            <p>Type: {store.pokemon.type}</p>
            <p>Ability: {store.pokemon.ability}</p>
            <p>Stats: {store.pokemon.stats}</p>
            {/* Agrega más detalles según sea necesario */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;