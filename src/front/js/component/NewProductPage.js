import React from "react";
import NewProductForm from "./NewProductForm";

const NewProductPage = () => {
    const onCreateProduct = async (newProductData) => {
        console.log("Nuevo producto:", newProductData);
        // Lógica para enviar los datos del nuevo producto al servidor
    };

    return (
        <div>
            <h2 style={{marginInlineStart: "20px"}}>Add New Product</h2>
            <NewProductForm onCreateProduct={onCreateProduct} />
        </div>
    );
};

export default NewProductPage;