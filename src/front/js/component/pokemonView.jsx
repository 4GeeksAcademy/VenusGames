import React, {useContext} from "react";
import { Context } from "../store/appContext.js";
//import { useNavigate, Link } from "react-router-dom";

const PokemonView = () => {
    const { store } = useContext(Context);

  useEffect(() => {
    actions.getPokemonsList(); // Utiliza la función getPokemonsList() del contexto
  }, []); // El segundo argumento del useEffect se pasa como un array vacío para que la solicitud solo se realice una vez al montar el componente.

    return (
        <div>
            <h2>Lista de Pokemons</h2>
            <ul>
                {store.pokemons.map(pokemon => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
    
};

export default PokemonView;