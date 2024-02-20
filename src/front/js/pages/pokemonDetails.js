import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/pokemonDetails.css"

function getTypeClass(type) {
  switch (type) {
    case 'normal':
      return 'normal-type';
    case 'fighting':
      return 'fighting-type';
    case 'flying':
      return 'flying-type';
    case 'ground':
      return 'ground-type';
    case 'rock':
      return 'rock-type';
    case 'bug':
      return 'bug-type';
    case 'ghost':
      return 'ghost-type';
    case 'steel':
      return 'steel-type';
    case 'electric':
      return 'electric-type';
    case 'psychic':
      return 'psychic-type';
    case 'ice':
      return 'ice-type';
    case 'dragon':
      return 'dragon-type';
    case 'dark':
      return 'dark-type';
    case 'fairy':
      return 'fairy-type';
    case 'unknown':
      return 'unknown-type';
    case 'shadown':
      return 'shadow-type';
    case 'grass':
      return 'grass-type';
    case 'poison':
      return 'poison-type';
    case 'fire':
      return 'fire-type';
    case 'water':
      return 'water-type';
    // Agrega más casos para otros tipos de Pokémon si es necesario
    default:
      return 'default-type';
  }
}

const PokemonDetails = () => {
  const { store, actions } = useContext(Context);
  const { name } = useParams();

  useEffect(() => {
    console.log(name)
    actions.getPokemonDetails(name);
  }, [name]);

  console.log(store.pokemon);

  const capitalizeFirstLetter = (string) => {
    if (!string) return ""; // Verificar si el string es undefined o null
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const imagenError = (e) => {
    e.target.src = "https://i.scdn.co/image/ab67616d0000b273b72e4742c10923035618fc0d"
  }

  return (
    <div className="detailsCard">

      <div className="nameAndType">

        <h3 className="detailsCardTitle">{store.pokemon.types && (
          <p>
          {store.pokemon.types.map(type => (
              <span key={type.type.name} className={getTypeClass(type.type.name)}>
                  {type.type.name}
              </span>
          ))}
      </p>
        )}</h3>
        <h2 className="detailsCardTitle">{capitalizeFirstLetter(name)}</h2>
      </div>

      {store.pokemon && (
        <div>
          <div className="detailsCardImg">
          {store.pokemon.stats && (
            <p className="Stats"><h2 className="Stats-title">Stats</h2> {store.pokemon.stats.map(stats => `${stats.stat.name}: ${stats.base_stat}`).join(', ')}</p>
          )}
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${store.pokemon.id}.png`}
              alt={store.pokemon.name}
            />
            
          </div>
          <h3 className="card-number"># {store.pokemon.order}</h3>

          
          {store.pokemon.abilities && (
           <p className="Abilities"><h2 className="Abilities-title">Abilities</h2> {store.pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
          )}
          <p className="baseExperience"><h3>Base Experience: {store.pokemon.base_experience}</h3></p>
          <p className="height">Height: {store.pokemon.height}</p>
          <p className="weight">Weight: {store.pokemon.weight}</p>
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