import React from "react";
import "./BrandPartners.css";
import brand1 from "../../assets/swiggy.png";
import brand2 from "../../assets/zomato.png";
import brand3 from "../../assets/blinkit.png";
import brand4 from "../../assets/uber.png";
import brand5 from "../../assets/dominos.png";

const BrandPartners = () => {
  return (
    <div className="brand-partners">
      <h2>Our Brand Partners</h2>
      <p className="brand-subtext">
        We proudly collaborate with trusted food and nutrition brands to bring
        you quality and taste.
      </p>

      <div className="brand-logos-wrapper">
        <div className="brand-logos">
          {/* Repeat logos to create infinite scroll effect */}
          <img src={brand1} alt="Swiggy" />
          <img src={brand2} alt="Zomato" />
          <img src={brand3} alt="Blinkit" />
          <img src={brand4} alt="Uber Eats" />
          <img src={brand5} alt="Dominos Pizza" />

          {/* Duplicate for smooth looping */}
          <img src={brand1} alt="Swiggy Duplicate" />
          <img src={brand2} alt="Zomato Duplicate" />
          <img src={brand3} alt="Blinkit Duplicate" />
          <img src={brand4} alt="Uber Eats Duplicate" />
          <img src={brand5} alt="Dominos Pizza" />
        </div>
      </div>
    </div>
  );
};

export default BrandPartners;
