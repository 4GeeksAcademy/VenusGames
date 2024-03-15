import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";

function Products() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProducts();
  }, []);

  console.log(store.products);
  
  return (
    <div className="container">
      <div className="row">
        {/* Mapear los productos y mostrar cada uno dentro de una tarjeta */}
        {store.products.map(product => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={product.image_url}
                alt={product.name}
              />
              <div className="card-body" style={{color:"white"}}>
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: {product.price}</p>
              </div>
              <div className="card-footer" style={{color:"white"}}>
                <p>corazon de favoritos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;