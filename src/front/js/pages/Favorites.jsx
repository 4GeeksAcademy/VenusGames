import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";

function Favorites() {
  const [Favorites, setFavorites] = useState([]);
	const { store, actions } = useContext(Context)

	const addFavorites = (fav) => {
		setFavorites([...Favorites, fav])
	}
	const removeFavorite = (index) => {
		setFavorites(Favorites.filter((_, elmIndex) => elmIndex !== index))
	}

	useEffect(() => {
		addFavorites
		removeFavorite
	}, [Favorites])

  console.log(store.favorites);

  return (
    <div>
      <h2>Your Favorites: {store.favorites.length}</h2>
      <ul>
      {store?.favorites && store.favorites?.length > 0 && store.favorites.map((favorite, id) => {
							return <li><a className="dropdown-item"> {favorite.id} <span onClick={() => { actions.removeFavorite(favorite.id) }} className={" fa fa-trash"}></span> </a></li>

						})}
						{store.favorite?.length === 0 && (
							<li><span className="dropdown-item">No tienes favoritos</span></li>
						)}
        {/* {store.favorites.map((favorite, index) => (
          <li key={index}>{favorite.name}</li> // Reemplaza "name" con el nombre del atributo que contiene el nombre del producto
        ))} */}
      </ul>
    </div>
  );
};

export default Favorites;
