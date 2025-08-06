import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import HireChef from "../../components/HireChef/HireChef";
import BrandPartners from "../../components/BrandPartners/BrandPartners";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBar from "../../components/SearchBar/SearchBar"; // ✅ Import SearchBar

const Home = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Add searchTerm state

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      {/* ✅ Add SearchBar */}
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchTerm={searchTerm} />{" "}
      {/* ✅ Pass searchTerm */}
      <HireChef />
      <AppDownload />
      <BrandPartners />
      <ContactForm />
    </div>
  );
};

export default Home;
