import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/pokemonDetails.css"

const PokemonDetails = () => {
  const { store, actions } = useContext(Context);
  const { name } = useParams();

  useEffect(() => {
    console.log(name)
    actions.getPokemonDetails(name);
  }, [name]);

  console.log(store.pokemon.name);

  const imagenError = (e) => {
    e.target.src = "https://i.scdn.co/image/ab67616d0000b273b72e4742c10923035618fc0d"
  }

  return (

    <div className="Pokemon-info">

      <div className="contain-detail">
        <div className="div-img">
          <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${store.pokemon.id}.png`}
          alt={store.pokemon.name} className="div-pic-act" onError={imagenError}>
          </img>
          <p className="personalmsg">Never gonna give you up, never gonna let you down. </p>
          <h2 className="error-msg">It seems you took a wrong turn ...</h2>
          <h5 className="error-msg">Try again.</h5>
        </div>

        <h2> {name}</h2>
        {/* Aquí puedes mostrar los detalles del Pokémon */}
        <div>
          {store.pokemon && Object.keys(store.pokemon).length > 0 && (
            <div>
              <h3>{store.pokemon.name}</h3>
              <p>Type: {store.pokemon.type}</p>
              <p>Ability: {store.pokemon.ability}</p>
              <p>Stats: {store.pokemon.stats}</p>
              <p>Evolution: {store.pokemon.evolution}</p>
              {/* Agrega más detalles */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails; //?