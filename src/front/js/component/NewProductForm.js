import React, { useState } from "react";
import "../../styles/NewProductForm.css";

const NewProductForm = ({ onCreateProduct }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreateProduct({ name, description, price });
		// Limpiar los campos después de enviar el formulario
		setName("");
		setDescription("");
		setPrice("");
	};

	return (
			<form onSubmit={handleSubmit} style={{justifyContent: "center", justifyItems: "stretch"}}>
				
				<div className="formParts">
				<h4>What pokemon related item do you wish to sell?</h4>
				<input
					type="text"
					placeholder="Product's name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				</div>

				<div className="formParts">
				<h4>What's that exactly?</h4>
				<textarea
					placeholder="Product's description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
				</div>

				<div className="formParts">
				<h4>Oh, cool. Then what's your price?</h4>
				<input
					type="number"
					placeholder="Price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					required
				/>
				</div>

				<div className="formParts">
				<button type="submit"> Add new product </button>
				</div>

			</form>
		
	);
};

export default NewProductForm;