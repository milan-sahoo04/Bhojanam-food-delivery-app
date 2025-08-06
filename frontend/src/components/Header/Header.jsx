import React, { useRef, useState } from "react";
import "./Header.css";
import headerVideo from "../../assets/food.mp4";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className={`header-video ${!hovered ? "blurred" : ""}`}
        muted
        loop
        playsInline
      >
        <source src={headerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="header-content">
        <h2>
          Order your favourite food here{" "}
          <span className="delivers-text-group">
            <span className="delivers-text">Delivers</span>
            <div className="rotating-text-wrapper inline">
              <div className="rotating-text-slider">
                <div>Weekly Plans</div>
                <div>Low-Oil Cooking</div>
                <div>Doorstep</div>
                <div>On Time</div>
                <div>Customize Meals</div>
                <div>Monthly Subscriptions</div>
                <div>Healthy Diet</div>
                <div>Home-Style Food</div>
                <div>Variety of Cuisines</div>
                <div>Fresh and Nutritious</div>
                <div>in Bhubaneswar</div>
                <div>and more</div>
                <div>Preservative-Free</div>

                {/* Repeat for smooth scroll */}
                <div>Weekly Plans</div>
                <div>Low-Oil Cooking</div>
                <div>Doorstep</div>
                <div>On Time</div>
                <div>Customize Meals</div>
                <div>Monthly Subscriptions</div>
                <div>Healthy Diet</div>
                <div>Home-Style Food</div>
                <div>Variety of Cuisines</div>
                <div>Fresh and Nutritious</div>
                <div>in Bhubaneswar</div>
                <div>and more</div>
                <div>Preservative-Free</div>
              </div>
            </div>
          </span>
        </h2>

        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and satisfy your cravings and
          elevate your dining experience, one delicious meal at a time
        </p>
        <button onClick={() => navigate("/menu")}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
