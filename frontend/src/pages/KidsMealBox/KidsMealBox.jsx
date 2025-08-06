import React from "react";
import "./KidsMealBox.css";

const KidsMealBox = () => {
  return (
    <div className="kids-meal-page">
      <h1>Kids Meal Box</h1>
      <p className="kids-meal-desc">
        Specially curated meals packed with fun, nutrition, and joy! Perfectly
        portioned for growing kids, with:
      </p>

      <ul className="kids-meal-list">
        <li>🍎 Nutritious ingredients (no preservatives)</li>
        <li>🎁 Surprise toys or stickers in every box</li>
        <li>🍱 Colorful, fun packaging</li>
        <li>✅ Options for allergies (nut-free, lactose-free)</li>
        <li>🌈 Creative weekly themes (space, jungle, fairytale)</li>
      </ul>

      <button className="kids-meal-btn">Order a Kids Meal</button>
    </div>
  );
};

export default KidsMealBox;
