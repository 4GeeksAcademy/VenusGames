import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/Products.css";

function Products() {
  const { store, actions } = useContext(Context);
  const [addedToFavorites, setAddedToFavorites] = useState({});

  useEffect(() => {
    actions.getProducts();
  }, []);

  console.log(store.products);

  const token = localStorage.getItem("token");
  if (!token) {
    console.error("User not authenticated. Please log in.");
    return;
  }

  const handleAddFavorite = (productId) => {
    actions.addFavorite(productId)
      .then(() => {
        console.log("Favorite added successfully");
        setAddedToFavorites({ ...addedToFavorites, [productId]: true });
        // Mostrar alerta
        alert("Product has been added successfully to your favorite list!");
      })
      .catch((error) => {
        console.error("Error adding favorite:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        {/* Mapear los productos y mostrar cada uno dentro de una tarjeta */}
        {store.products.map((product) => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={product.image_url}
                alt={product.name}
              />
              <div className="card-body" style={{ color: "white" }}>
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: {product.price}</p>
              </div>
              
              <div
                className="card-footer"
                style={{
                  color: "white",
                  alignSelf: "flex-end",
                  cursor: "pointer",
                }}
                onClick={() => handleAddFavorite(product)}
              >
                {addedToFavorites[product.id] ? (
                  <i className="fas fa-heart" style={{ color: "red" }}></i>
                ) : (
                  <i className="far fa-heart" onClick={() => handleAddFavorite(product.id)}></i>
                )}
              </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
