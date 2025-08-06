// components/SubscriptionReminder/NotificationPopup.jsx
import React from "react";
import "./NotificationPopup.css";

const NotificationPopup = ({ onClose }) => {
  const subscriptionName = "Monthly Combo Pack";
  const daysLeft = 6;

  return (
    <div className="notification-popup-overlay" onClick={onClose}>
      <div className="notification-popup" onClick={(e) => e.stopPropagation()}>
        <h3>📢 Subscription Reminder</h3>
        <p>
          <strong>Plan:</strong> {subscriptionName}
        </p>
        <p>
          <strong>Days left:</strong> {daysLeft} days
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NotificationPopup;
