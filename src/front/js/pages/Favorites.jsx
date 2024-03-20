import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";

function Favorites() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getFavorites();
  }, []);

  console.log(store.favorites);

  return (
    <div>
      <h1>Your Favorites</h1>
      <ul>
        {store.favorites.map((favorite, index) => (
          <li key={index}>{favorite.name}</li> // Reemplaza "name" con el nombre del atributo que contiene el nombre del producto
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
