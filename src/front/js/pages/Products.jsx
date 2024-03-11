import React, { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('/api/products');
          if (!response.ok) {
            throw new Error('Error al obtener los productos');
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProducts();
    }, []);
  
    return (
      <div className="Products">
        {/* Renderizar los productos */}
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            {/* Añade más detalles según sea necesario */}
          </div>
        ))}
      </div>
    );
  }

export default Products
