import React, {useState} from "react";
import '../../styles/SearchSection.css';
const SearchSection = ({ onSearch, onLocationSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [locationSearchTerm, setLocationSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleLocationInputChange = (e) => {
        setLocationSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
        onLocationSearch(locationSearchTerm);
    };


    return (
    <section className="search-section">
        <h2>Search for Events and Groups</h2>
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by keyword..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Location..."
                value={locationSearchTerm}
                onChange={handleLocationInputChange}
            />
            <select>
                <option value="">Category</option>
                <option value="Music">Music</option>
                <option value="Tech">Tech</option>
                <option value="Fitness">Fitness</option>
                <option value="Business">Business</option>
            </select>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="Location"*/}
            {/*    value={locationSearchTerm}*/}
            {/*    onChange={handleLocationInputChange}*/}
            {/*/>*/}
            <button onClick={handleSearchClick}>Search</button>
        </div>
    </section>
    );
};
export default SearchSection;