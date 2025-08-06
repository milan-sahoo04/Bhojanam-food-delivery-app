import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";
import logo from "../../assets/up-arrow.png"; // ✅ Replace with your arrow image if needed

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return visible ? (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <img src={logo} alt="Scroll to top" />
    </div>
  ) : null;
};

export default ScrollToTop;
