import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import HireChef from "../../components/HireChef/HireChef";
import BrandPartners from "../../components/BrandPartners/BrandPartners"; // ✅ ADD THIS
import ContactForm from "../../components/ContactForm/ContactForm";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <HireChef />
      <AppDownload />
      <BrandPartners /> {/* ✅ Correct usage here */}
      <ContactForm />
    </div>
  );
};

export default Home;
