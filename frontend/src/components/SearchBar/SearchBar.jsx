import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div
      className="search-bar-container"
      style={{ display: "flex", alignItems: "center" }}
    >
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={searchTerm}
        placeholder="Search food by name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
