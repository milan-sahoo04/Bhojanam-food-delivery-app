import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import SearchBar from "../SearchBar/SearchBar"; // ✅ Add this import

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // ✅ Local state for search term
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filtering by category + search
  const filteredFoodList = food_list.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="food-display" id="food-display">
      <h2>Freshly Cooked Favorites Just for You</h2>

      {/* ✅ Search bar placed below heading */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
