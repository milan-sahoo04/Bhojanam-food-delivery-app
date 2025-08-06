import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import NotificationPopup from "../SubscriptionReminder/NotificationPopup";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);
  const closeMenu = () => setShowMobileMenu(false);

  return (
    <div className="navbar">
      <div
        className={`navbar-toggle ${showMobileMenu ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className={`navbar-menu ${showMobileMenu ? "active" : ""}`}>
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
            closeMenu();
          }}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => {
            setMenu("menu");
            closeMenu();
          }}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => {
            setMenu("mobile-app");
            closeMenu();
          }}
        >
          Mobile App
        </a>
        <Link
          to="/about"
          className={menu === "about" ? "active" : ""}
          onClick={() => {
            setMenu("about");
            closeMenu();
          }}
        >
          About
        </Link>
        <Link
          to="/diet-plan"
          className={menu === "diet" ? "active" : ""}
          onClick={() => {
            setMenu("diet");
            closeMenu();
          }}
        >
          Diet Plan
        </Link>
        <Link
          to="/kids-meal"
          className={menu === "kids" ? "active" : ""}
          onClick={() => {
            setMenu("kids");
            closeMenu();
          }}
        >
          Kids Meal
        </Link>
        <Link
          to="/subscriptions"
          className={menu === "subscriptions" ? "active" : ""}
          onClick={() => {
            setMenu("subscriptions");
            closeMenu();
          }}
        >
          Subscription
        </Link>
        <Link
          to="/blog"
          className={menu === "blog" ? "active" : ""}
          onClick={() => {
            setMenu("blog");
            closeMenu();
          }}
        >
          Blog
        </Link>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => {
            setMenu("contact-us");
            closeMenu();
          }}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" title="Search" />
        <div className="navbar-icon-wrapper">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {getTotalCartAmount() !== 0 && <div className="dot"></div>}
        </div>

        <div
          className="navbar-icon-wrapper"
          onClick={() => setShowNotify(true)}
        >
          <img src={assets.notify_icon} alt="Notify" />
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Orders" />
                Orders
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {showNotify && <NotificationPopup onClose={() => setShowNotify(false)} />}
    </div>
  );
};

export default Navbar;
