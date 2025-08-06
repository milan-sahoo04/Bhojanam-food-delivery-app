import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <img className="footer-logo" src={assets.logo} alt="Bhojanam Logo" />
          <p className="footer-desc">
            Bringing the taste of home to your doorstep. Fresh, healthy, and
            affordable meals crafted by personal chefs who care.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Subscription Plans</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Get in Touch</h3>
          <ul>
            <li>📞 +1-222-456-7890</li>
            <li>📧 contact@bhojanam.com</li>
            <li>📍 Bhubaneswar, India</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copy">© 2025 Bhojanam.com | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
