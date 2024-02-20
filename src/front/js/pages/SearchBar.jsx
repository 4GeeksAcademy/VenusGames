import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group d-flex justify-content-center">
            <div className="search-bar-space">
                <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={handleChange}
            />
            </div>
            <div className="search-bar-button">
                <button type="submit">Search</button>
            </div>
        </div>
    </form>
  );
};

export default SearchBar;
