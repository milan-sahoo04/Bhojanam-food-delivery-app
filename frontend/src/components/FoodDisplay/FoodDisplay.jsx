import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import SearchBar from "../SearchBar/SearchBar";
import SortOptions from "../SortOptions/SortOptions"; // <-- Import SortOptions

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("none");

  let filteredFoodList = food_list.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortBy === "priceLowToHigh") {
    filteredFoodList = filteredFoodList.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighToLow") {
    filteredFoodList = filteredFoodList.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Freshly Cooked Favorites Just for You</h2>

      {/* Container to hold SearchBar + SortOptions side by side */}
      <div className="search-sort-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className="food-display-list">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p style={{ padding: "20px" }}>No matching dishes found.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
