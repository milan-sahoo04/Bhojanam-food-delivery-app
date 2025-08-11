import React, { useState } from "react";
import "./HireChef.css";
import chef1 from "../../assets/chef1.png";
import chef2 from "../../assets/chef2.png";
import chef3 from "../../assets/chef3.png";
import chef4 from "../../assets/chef4.png";
import axios from "axios"; // ✅ Added axios for API call

const chefs = [
  {
    name: "Chef Subhalaxmi",
    specialty: "Odia Vegetarian Cuisine",
    experience: "12 years",
    image: chef1,
    location: "Bhubaneswar, Odisha",
    contact: "+91-9876543210",
    email: "subhalaxmi@bhojanam.com",
    bio: "Expert in Odia veg dishes like Dalma, Besara, and Pakhala Bhata.",
  },
  {
    name: "Chef Baisali",
    specialty: "Traditional Pitha & Sweets",
    experience: "8 years",
    image: chef2,
    location: "Puri, Odisha",
    contact: "+91-8765432190",
    email: "baisali@bhojanam.com",
    bio: "Famous for making authentic Chakuli, Poda Pitha, and Rasagola.",
  },
  {
    name: "Chef Ratikanta",
    specialty: "Seafood & Mahaprasad Style",
    experience: "15 years",
    image: chef3,
    location: "Cuttack, Odisha",
    contact: "+91-7654321890",
    email: "ratikanta@bhojanam.com",
    bio: "Expert in prawn curry, crab masala, and temple-style Mahaprasad.",
  },
  {
    name: "Chef Manaswini",
    specialty: "Modern Odia Fusion",
    experience: "10 years",
    image: chef4,
    location: "Sambalpur, Odisha",
    contact: "+91-9988776655",
    email: "manaswini@bhojanam.com",
    bio: "Creates fusion dishes combining Western techniques with Odia flavors.",
  },
];

const HireChef = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChef, setSelectedChef] = useState(null);
  const [hireSuccess, setHireSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    experience: "",
    specialty: "",
    phone: "",
    email: "",
    bio: "",
    accepted: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [hireData, setHireData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const nextChef = () => setCurrentIndex((prev) => (prev + 1) % chefs.length);
  const prevChef = () =>
    setCurrentIndex((prev) => (prev - 1 + chefs.length) % chefs.length);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    if (!formData.accepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/chef/create", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        specialty: formData.specialty,
        location: formData.location,
        bio: formData.bio,
      });

      if (res.data.success) {
        console.log("✅ New Chef Submitted:", res.data.chef);
        setSubmitted(true);
      }
    } catch (error) {
      console.error("❌ Error submitting chef:", error);
      alert("Something went wrong while submitting. Please try again.");
    }
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    console.log("Chef Hired By:", hireData);
    setHireSuccess(true);

    setTimeout(() => {
      setHireSuccess(false);
      setSelectedChef(null);
    }, 3000);

    setHireData({ userName: "", userEmail: "", userPhone: "" });
  };

  return (
    <div className="hire-chef" id="hire-chef">
      <h2>Hire a Personal Chef</h2>
      <p className="hire-chef-desc">
        Discover professional Odia chefs for your special occasion or daily
        meals.
      </p>

      <div className="hire-chef-flex">
        <div className="carousel">
          <button className="nav-btn" onClick={prevChef}>
            &#8249;
          </button>

          <div
            className="chef-card"
            onClick={() => setSelectedChef(chefs[currentIndex])}
          >
            <div className="chef-img-container">
              <img
                src={chefs[currentIndex].image}
                alt={chefs[currentIndex].name}
              />
            </div>
            <h3>{chefs[currentIndex].name}</h3>
            <p>
              <strong>Specialty:</strong> {chefs[currentIndex].specialty}
            </p>
            <p>
              <strong>Experience:</strong> {chefs[currentIndex].experience}
            </p>
            <button className="hire-btn">Hire Now</button>
          </div>

          <button className="nav-btn" onClick={nextChef}>
            &#8250;
          </button>
        </div>

        <div className="join-chef-form">
          <h3>Join as a Home Chef</h3>
          <p>Passionate about Odia food? Submit your profile now!</p>

          {!submitted ? (
            <form onSubmit={handleJoinSubmit}>
              <div className="form-group">
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="experience"
                  placeholder="Experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="specialty"
                  placeholder="Specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <textarea
                name="bio"
                placeholder="Tell us about yourself"
                value={formData.bio}
                onChange={handleInputChange}
                required
              ></textarea>

              <div className="terms-wrapper">
                <input
                  type="checkbox"
                  id="terms"
                  name="accepted"
                  checked={formData.accepted}
                  onChange={handleInputChange}
                />
                <label htmlFor="terms">
                  I accept the{" "}
                  <a href="#terms" className="terms-link">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <button className="hire-btn" type="submit">
                Submit
              </button>
            </form>
          ) : (
            <div className="thank-you">
              <h4>Thank you for joining!</h4>
              <p>We’ll review your profile and contact you soon.</p>
            </div>
          )}
        </div>
      </div>

      {selectedChef && (
        <div className="modal-overlay" onClick={() => setSelectedChef(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedChef.name}</h2>
            <img src={selectedChef.image} alt={selectedChef.name} />
            <p>
              <strong>Specialty:</strong> {selectedChef.specialty}
            </p>
            <p>
              <strong>Experience:</strong> {selectedChef.experience}
            </p>
            <p>
              <strong>Location:</strong> {selectedChef.location}
            </p>
            <p>
              <strong>Contact:</strong> {selectedChef.contact}
            </p>
            <p>
              <strong>Email:</strong> {selectedChef.email}
            </p>
            <p className="chef-bio">{selectedChef.bio}</p>

            <form className="hire-chef-form" onSubmit={handleHireSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={hireData.userName}
                onChange={(e) =>
                  setHireData({ ...hireData, userName: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={hireData.userEmail}
                onChange={(e) =>
                  setHireData({ ...hireData, userEmail: e.target.value })
                }
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={hireData.userPhone}
                onChange={(e) =>
                  setHireData({ ...hireData, userPhone: e.target.value })
                }
                required
              />
              <button className="hire-btn" type="submit">
                Confirm Hire
              </button>
            </form>

            {hireSuccess && (
              <div className="success-message">🎉 Chef hired successfully!</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HireChef;
