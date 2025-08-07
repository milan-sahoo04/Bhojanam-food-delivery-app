import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import HireChef from "../../components/HireChef/HireChef";
import BrandPartners from "../../components/BrandPartners/BrandPartners";
import ContactForm from "../../components/ContactForm/ContactForm";
import FoodDiary from "../../components/FoodDiary/FoodDiary";
import MoodMeal from "../../components/MoodMeal/MoodMeal";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} /> {/* ✅ searchTerm handled inside */}
      <HireChef />
      <MoodMeal />
      <FoodDiary />
      <AppDownload />
      <BrandPartners />
      <ContactForm />
    </div>
  );
};

export default Home;
