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

  console.log(store.pokemon);

  const imagenError = (e) => {
    e.target.src = "https://i.scdn.co/image/ab67616d0000b273b72e4742c10923035618fc0d"
  }

  return (
        <div className="detailsCard">
        <h2 className="detailsCardTitle">{name}</h2>
        {store.pokemon && (
          <div>
            <div className="detailsCardImg">
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${store.pokemon.id}.png`}
              alt={store.pokemon.name}
            />
            </div>
            <h3>{store.pokemon.name}</h3>
            {/* <h3>{store.pokemon.base_stats}</h3> */}
            {/* {store.pokemon.stats && (
              <p>stats: {store.pokemon.stats.map(stats => stats.stats.name).join(', ')}</p>
            )} */}
            {store.pokemon.evolution && (
              <p>Type: {store.pokemon.evolution.map(evolution=> evolution.evolution.name).join(', ')}</p>
            )}
            {store.pokemon.types && (
              <p>Type: {store.pokemon.types.map(type => type.type.name).join(', ')}</p>
            )}
            {store.pokemon.abilities && (
              <p>Abilities: {store.pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            )}
            <p>Base Experience: {store.pokemon.base_experience}</p>
            <p>Height: {store.pokemon.height}</p>
            <p>Area encounter: {store.pokemon.location_area_encounters}</p>
            {/* Puedes agregar más detalles según sea necesario */}
          </div>
        )}
        {/* on case of error picture
        <div className="div-img">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${store.pokemon.id}.png`}
            alt={store.pokemon.name} className="div-pic-act" onError={imagenError}>
          </img>
          <p className="personalmsg">Never gonna give you up, never gonna let you down. </p>
          <h2 className="error-msg">It seems you took a wrong turn ...</h2>
          <h5 className="error-msg">Try again.</h5>
        </div> */}
      </div>
  );
};

export default PokemonDetails; //?