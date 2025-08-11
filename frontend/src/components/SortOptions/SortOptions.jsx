import React from "react";
import "./SortOptions.css";

const SortOptions = ({ sortBy, setSortBy }) => {
  return (
    <select
      className="sort-select"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="none">Sort By</option>
      <option value="priceLowToHigh">Price: Low to High</option>
      <option value="priceHighToLow">Price: High to Low</option>
    </select>
  );
};

export default SortOptions;
