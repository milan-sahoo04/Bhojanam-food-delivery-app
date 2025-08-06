import React, { useState } from "react";
import "./SubscriptionPlans.css";
import comboImg from "../../assets/subscription-combo.png";
import dinnerImg from "../../assets/subscription-dinner.png";
import lunchImg from "../../assets/subscription-lunch.png";
import corporateImg from "../../assets/subscription-corporate.png";

const subscriptions = [
  {
    title: "Monthly Combo Pack",
    image: comboImg,
    price: "₹4,200.00",
    rating: 4.8,
  },
  {
    title: "Monthly Dinner Pack",
    image: dinnerImg,
    price: "₹2,100.00",
    rating: 4.5,
  },
  {
    title: "Monthly Lunch Pack",
    image: lunchImg,
    price: "₹2,100.00",
    rating: 4.6,
  },
  {
    title: "Corporate Lunch Pack",
    image: corporateImg,
    price: "₹2,000.00",
    rating: 4.4,
  },
];

const SubscriptionPlans = () => {
  const [showSkipForm, setShowSkipForm] = useState(false);
  const [skipDate, setSkipDate] = useState("");
  const [skipReason, setSkipReason] = useState("");

  const handleSubmitSkip = (e) => {
    e.preventDefault();
    alert(`Meal skipped on ${skipDate}\nReason: ${skipReason}`);
    setShowSkipForm(false);
    setSkipDate("");
    setSkipReason("");
  };

  return (
    <div className="subscription-page">
      <h1 className="subscription-heading">Our Subscription Plans</h1>
      <p className="subscription-description">
        We bring hot, home-cooked meals directly to your doorstep. Subscribe for
        a prepaid month, skip unused meals (credited for up to 10 days!), and
        customize your choices for a truly personalized experience. Our
        cloud-based system keeps costs low, so experience the comfort and
        convenience of delicious, home-style food at an affordable price. Give
        us a try today!
      </p>

      <div className="subscription-grid">
        {subscriptions.map((item, index) => (
          <div className="subscription-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="rating">⭐ {item.rating}</div>
            <div className="price">{item.price}</div>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        ))}
      </div>

      <div className="swap-skip-section">
        <h2>Meal Swap / Skip Day</h2>
        <p>
          Let users swap meals or skip a delivery if they’re away or don’t want
          a particular dish. Chefs get notified in advance, reducing food waste.
        </p>
        <button
          className="skip-meal-btn"
          onClick={() => setShowSkipForm(!showSkipForm)}
        >
          {showSkipForm ? "Cancel" : "Skip a Meal"}
        </button>

        {showSkipForm && (
          <form className="skip-form" onSubmit={handleSubmitSkip}>
            <label>
              Select date:
              <input
                type="date"
                required
                value={skipDate}
                onChange={(e) => setSkipDate(e.target.value)}
              />
            </label>
            <label>
              Reason (optional):
              <textarea
                value={skipReason}
                onChange={(e) => setSkipReason(e.target.value)}
                placeholder="e.g. Traveling or not hungry..."
              />
            </label>
            <button type="submit" className="submit-skip-btn">
              Confirm Skip
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
