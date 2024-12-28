import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-section">
            <h1>Search Events...</h1>
            <input
                type="text"
                placeholder="Search Events..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchBar;
