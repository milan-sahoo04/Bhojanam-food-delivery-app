import React, { useState } from "react";
import "./PersonalizedDiet.css";
import vegImg from "../../assets/veg.png";
import medicalImg from "../../assets/veg.png";
import subscriptionImg from "../../assets/veg.png";
import calorieImg from "../../assets/veg.png";

const dietCategories = [
  {
    id: "veg",
    title: "Vegetarian, Vegan, Keto, or High Protein Meals",
    image: vegImg,
    chart: [
      "🌱 Vegetarian: Rice, Dal, Vegetables, Fruits",
      "🌿 Vegan: Quinoa, Lentils, Tofu, Almond milk",
      "🥩 Keto: Eggs, Avocado, Nuts, Chicken",
      "💪 High Protein: Paneer, Legumes, Soya, Eggs",
    ],
  },
  {
    id: "medical",
    title: "Medical-specific Diets (e.g. Diabetic, Low Salt)",
    image: medicalImg,
    chart: [
      "🩺 Diabetic: Low GI foods, Green veggies, Whole grains",
      "🧂 Low Salt: Boiled veggies, Fruits, Low sodium grains",
    ],
  },
  {
    id: "subscription",
    title: "Subscription-based or Pay-as-you-go Plans",
    image: subscriptionImg,
    chart: [
      "📆 Monthly Pack - ₹4200",
      "🍱 Lunch Only - ₹2100",
      "🌙 Dinner Only - ₹2100",
      "🧾 Pay as you go - ₹150/meal",
    ],
  },
  {
    id: "calorie",
    title: "Calorie & Macronutrient Tracking Support",
    image: calorieImg,
    chart: [
      "🔥 1200-1800 kcal/day options",
      "🍗 Protein: 20-30%",
      "🥑 Fats: 20%",
      "🍚 Carbs: 50-60%",
    ],
  },
];

const PersonalizedDiet = () => {
  const [selected, setSelected] = useState(null);
  const [customizing, setCustomizing] = useState(false);

  const handleBack = () => {
    setSelected(null);
    setCustomizing(false);
  };

  return (
    <div className="diet-page">
      {!selected && !customizing && (
        <>
          <h1>Personalized Diet Plans</h1>
          <p className="diet-desc">
            Tap on a card to explore diet plans and start customizing.
          </p>
          <div className="diet-card-grid">
            {dietCategories.map((diet) => (
              <div
                key={diet.id}
                className="diet-card"
                onClick={() => setSelected(diet)}
              >
                <img src={diet.image} alt={diet.title} />
                <h3>{diet.title}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {selected && !customizing && (
        <div className="diet-detail">
          <button className="back-btn" onClick={handleBack}>
            ⬅ Back
          </button>
          <h2>{selected.title}</h2>
          <ul className="diet-chart">
            {selected.chart.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button className="diet-btn" onClick={() => setCustomizing(true)}>
            Build Your Plan
          </button>
        </div>
      )}

      {customizing && (
        <div className="custom-diet-form">
          <button className="back-btn" onClick={handleBack}>
            ⬅ Back
          </button>
          <h2>📝 Customize Your Diet Plan</h2>
          <form>
            <label>Name:</label>
            <input type="text" placeholder="Your name" />
            <label>Age:</label>
            <input type="number" placeholder="e.g. 30" />
            <label>Goal:</label>
            <select>
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Balanced Diet</option>
            </select>
            <label>Allergies or Preferences:</label>
            <textarea placeholder="e.g. No dairy, allergic to nuts"></textarea>
            <button className="diet-btn" type="submit">
              Submit Plan
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PersonalizedDiet;
