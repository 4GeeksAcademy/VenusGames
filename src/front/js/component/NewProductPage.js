import React, {useContext} from "react";
import NewProductForm from "./NewProductForm";
import { Context } from "../store/appContext.js";

const NewProductPage = () => {
    const { actions } = useContext(Context);
    const onCreateProduct = async (newProductData) => {
        console.log("Nuevo producto:", newProductData);
        try {
            await actions.addNewProdut(newProductData);
        } catch (error) {
            console.error("error al agregar nuevo producto", error);
        }
    };

    return (
        <div>
            <h2 style={{marginInlineStart: "20px"}}>Add New Product</h2>
            <NewProductForm onCreateProduct={onCreateProduct} />
        </div>
    );
};

export default NewProductPage;