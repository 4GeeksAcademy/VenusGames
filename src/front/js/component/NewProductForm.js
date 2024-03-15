import React, { useState } from "react";

const NewProductForm = ({ onCreateProduct }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
  
	const handleSubmit = (event) => {
	  event.preventDefault();
	  onCreateProduct({ name, description, price });
	};
  
	return (
	  <form onSubmit={handleSubmit}>
		<input
		  type="text"
		  placeholder="Product's name"
		  value={name}
		  onChange={(e) => setName(e.target.value)}
		  required
		/>
		<textarea
		  placeholder="Product's description"
		  value={description}
		  onChange={(e) => setDescription(e.target.value)}
		  required
		/>
		<input
		  type="number"
		  placeholder="Price"
		  value={price}
		  onChange={(e) => setPrice(e.target.value)}
		  required
		/>
		<button type="submit"> Add new product </button>
	  </form>
	);
  };
  
  export default NewProductForm;