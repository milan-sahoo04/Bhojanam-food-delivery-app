import React, { useState } from "react";
import "./MoodMeal.css";

// Import images from assets
import biryaniImg from "../../assets/biryani.png";
import paneerImg from "../../assets/paneer.png";
import khichdiImg from "../../assets/khichdi.png";
import daalImg from "../../assets/daal.png";
import icecreamImg from "../../assets/icecream.png";
import lassiImg from "../../assets/lassi.png";
import pastaImg from "../../assets/pasta.png";
import pizzaImg from "../../assets/pizza.png";

const moodOptions = [
  { emoji: "😊", mood: "Happy" },
  { emoji: "😞", mood: "Sad" },
  { emoji: "😠", mood: "Angry" },
  { emoji: "😍", mood: "In Love" },
];

const moodMealMap = {
  Happy: [
    { name: "Biryani", image: biryaniImg },
    { name: "Paneer Butter Masala", image: paneerImg },
  ],
  Sad: [
    { name: "Khichdi", image: khichdiImg },
    { name: "Daal Chawal", image: daalImg },
  ],
  Angry: [
    { name: "Ice Cream", image: icecreamImg },
    { name: "Lassi", image: lassiImg },
  ],
  "In Love": [
    { name: "Pasta", image: pastaImg },
    { name: "Pizza", image: pizzaImg },
  ],
};

const MoodMeal = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-meal">
      <h2>What's Your Mood Today? 🧠</h2>

      {/* Mood Selection */}
      <div className="mood-options">
        {moodOptions.map((mood) => (
          <button
            key={mood.mood}
            onClick={() => setSelectedMood(mood.mood)}
            className={selectedMood === mood.mood ? "active" : ""}
          >
            {mood.emoji} <span>{mood.mood}</span>
          </button>
        ))}
      </div>

      {/* Meal Suggestions */}
      {selectedMood && (
        <div className="meal-suggestions">
          <h3>Meal Suggestions for "{selectedMood}" Mood</h3>
          <div className="meal-cards">
            {moodMealMap[selectedMood].map((meal, index) => (
              <div key={index} className="meal-card">
                <img src={meal.image} alt={meal.name} />
                <p>{meal.name}</p>
                <button>Order Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodMeal;
