import React from "react";
import "./Menu.css";

const vegMenu = [
  {
    day: "Monday",
    lunch: "Rice, Dal, Mix Vegetable Curry, Dahi Bundi",
    dinner: "Roti, Seasonal Curry, Siveya",
  },
  {
    day: "Tuesday",
    lunch: "Rice, Dal Seasonal Curry, Baigan Bharta",
    dinner: "Roti, Chhole Masala, Achari Piaz",
  },
  {
    day: "Wednesday",
    lunch: "Rice, Dal, Muttar Paneer, Aloo Chokha",
    dinner: "Roti, Paneer Butter Masala",
  },
  {
    day: "Thursday",
    lunch: "Rice, Dalma, Cabbage Kassa, Pineapple Khata",
    dinner: "Roti, Muttor Curry, Khiri",
  },
  {
    day: "Friday",
    lunch: "Rice, Dal, Mushroom Besar, Bhaji",
    dinner: "Roti, Veg Kaju Masala",
  },
  {
    day: "Saturday",
    lunch: "Rice, Dali, Soyabean Kassa, Finger Chips",
    dinner: "Roti, Buta Mix Kobi Masala, Malpua/Jalebi",
  },
  {
    day: "Sunday",
    lunch: "Rice, Dali, Chole Mix, Khajur Khata",
    dinner: "Roti, Mix Rajma, Dessert",
  },
];

const nonVegMenu = [
  {
    day: "Monday",
    lunch: "Rice, Dal, Mix Vegetable Curry, Dahi Bundi",
    dinner: "Roti, Seasonal Curry, Siveya",
  },
  {
    day: "Tuesday",
    lunch: "Rice, Dal, Seasonal Curry, Baigan Bharta",
    dinner: "Roti, Chhole Masala, Achari Piaz",
  },
  {
    day: "Wednesday",
    lunch: "Rice, Dal, Semi-Gravy Chicken, Salad",
    dinner: "Roti, Egg Masala",
  },
  {
    day: "Thursday",
    lunch: "Rice, Dalma, Cabbage Kassa, Pineapple Khata",
    dinner: "Roti, Muttor Curry, Khiri",
  },
  {
    day: "Friday",
    lunch: "Rice, Dal, Fish Masala/Besar, Salad",
    dinner: "Roti, Chicken Masala",
  },
  {
    day: "Saturday",
    lunch: "Rice, Dali, Soyabean Kassa, Finger Chips",
    dinner: "Roti, Buta Mix Kobi Masala, Malpua/Jalebi",
  },
  {
    day: "Sunday",
    lunch: "Chicken Dum Biriyani, Raita",
    dinner: "Roti, Egg Tadka, Dessert",
  },
];

const Menu = () => {
  return (
    <div className="menu-page">
      <section className="section">
        <h1 className="veg-title">VEG LUNCH & DINNER</h1>
        <div className="menu-grid">
          {vegMenu.map((item, index) => (
            <div key={index} className="menu-card">
              <h2>{item.day}</h2>
              <p>
                <strong>Lunch:</strong> {item.lunch}
              </p>
              <p>
                <strong>Dinner:</strong> {item.dinner}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h1 className="nonveg-title">NON VEG LUNCH & DINNER</h1>
        <div className="menu-grid">
          {nonVegMenu.map((item, index) => (
            <div key={index} className="menu-card">
              <h2>{item.day}</h2>
              <p>
                <strong>Lunch:</strong> {item.lunch}
              </p>
              <p>
                <strong>Dinner:</strong> {item.dinner}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
