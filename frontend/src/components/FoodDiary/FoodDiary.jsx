import React, { useState, useEffect } from "react";
import "./FoodDiary.css";

const FoodDiary = () => {
  const [entries, setEntries] = useState([]);
  const [comment, setComment] = useState("");
  const [selfie, setSelfie] = useState(null);

  // Load from localStorage on page load
  useEffect(() => {
    const savedEntries = localStorage.getItem("foodDiaryEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("foodDiaryEntries", JSON.stringify(entries));
  }, [entries]);

  // Selfie Upload
  const handleSelfieUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setSelfie(reader.result);
    reader.readAsDataURL(file);
  };

  // Post Entry
  const handlePost = () => {
    if (!selfie) {
      alert("Please upload your selfie.");
      return;
    }
    const newEntry = {
      selfie,
      timestamp: new Date().toLocaleString(),
      comment,
    };
    setEntries([newEntry, ...entries]);
    setComment("");
    setSelfie(null);
  };

  // Remove Entry
  const removeEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="food-diary-container">
      <h2>🍽 Bhojanm Food Diary</h2>

      <div className="upload-section">
        <label className="upload-label">Upload Your Food Selfie</label>
        <input type="file" accept="image/*" onChange={handleSelfieUpload} />
        {selfie && (
          <div className="preview-selfie">
            <img src={selfie} alt="Preview Selfie" />
            <button className="remove-btn" onClick={() => setSelfie(null)}>
              ✖
            </button>
          </div>
        )}

        <textarea
          placeholder="Write a comment about your meal..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button className="post-btn" onClick={handlePost}>
          Post Entry
        </button>
      </div>

      <div className="diary-gallery">
        {entries.map((entry, index) => (
          <div className="diary-entry" key={index}>
            <div className="selfie-section">
              <img
                src={entry.selfie}
                alt="User selfie"
                className="selfie-img"
              />
            </div>
            <div className="entry-details">
              <p className="timestamp">{entry.timestamp}</p>
              <p className="comment">💬 {entry.comment}</p>
            </div>
            <button
              className="remove-entry-btn"
              onClick={() => removeEntry(index)}
            >
              Remove Entry
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDiary;
