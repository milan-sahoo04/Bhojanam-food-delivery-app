// src/components/FoodDiary/FoodDiary.jsx
import React, { useState } from "react";
import "./FoodDiary.css";

const FoodDiary = () => {
  const [entries, setEntries] = useState([]);
  const [comment, setComment] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newEntry = {
        image: reader.result,
        timestamp: new Date().toLocaleString(),
        comment,
      };
      setEntries([newEntry, ...entries]);
      setComment("");
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="food-diary-container">
      <h2>📷 Food Diary</h2>

      <div className="upload-section">
        <label htmlFor="upload-input" className="upload-label">
          Upload Meal Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="upload-input"
        />

        <textarea
          placeholder="Write a comment about your meal..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <div className="diary-gallery">
        {entries.map((entry, index) => (
          <div className="diary-entry" key={index}>
            <img src={entry.image} alt="Food entry" />
            <p className="timestamp">{entry.timestamp}</p>
            <p className="comment">💬 {entry.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDiary;
