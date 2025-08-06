import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plan: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add backend submission logic here
  };

  return (
    <div className="contact-form-container" id="footer">
      <h2>Contact Us...</h2>
      <div className="contact-form-content">
        <div className="map-container">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59303.42018075659!2d85.7712043504443!3d20.302900980149386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a8ebf34de5%3A0x2431a9a4ea9f918b!2sHomely%20Khana!5e0!3m2!1sen!2sin!4v1694151469331"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Write your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                maxLength="10"
                placeholder="Put your 10 digit mobile number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full">
            <label>Interested in *</label>
            <select
              name="plan"
              required
              value={formData.plan}
              onChange={handleChange}
            >
              <option value="">Choose your monthly plan</option>
              <option value="Lunch Pack">Lunch Pack</option>
              <option value="Dinner Pack">Dinner Pack</option>
              <option value="Combo Pack">Combo Pack</option>
              <option value="Corporate Pack">Corporate Pack</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Details *</label>
            <input
              type="text"
              name="message"
              required
              placeholder="Share your requirement details with us!"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
