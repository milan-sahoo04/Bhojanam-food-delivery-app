import React, { useState } from "react";
import "./MoodMeal.css";

const moodOptions = [
  { emoji: "😊", mood: "Happy" },
  { emoji: "😞", mood: "Sad" },
  { emoji: "😠", mood: "Angry" },
  { emoji: "😍", mood: "In Love" },
];

const moodMealMap = {
  Happy: [
    { name: "Biryani", image: "/images/biryani.jpg" },
    { name: "Paneer Butter Masala", image: "/images/paneer.jpg" },
  ],
  Sad: [
    { name: "Khichdi", image: "/images/khichdi.jpg" },
    { name: "Daal Chawal", image: "/images/daal.jpg" },
  ],
  Angry: [
    { name: "Ice Cream", image: "/images/icecream.jpg" },
    { name: "Lassi", image: "/images/lassi.jpg" },
  ],
  "In Love": [
    { name: "Pasta", image: "/images/pasta.jpg" },
    { name: "Pizza", image: "/images/pizza.jpg" },
  ],
};

const MoodMeal = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="mood-meal">
      <h2>What's Your Mood Today? 🧠</h2>
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
