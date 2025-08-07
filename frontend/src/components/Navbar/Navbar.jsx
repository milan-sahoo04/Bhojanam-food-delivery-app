import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import NotificationPopup from "../SubscriptionReminder/NotificationPopup";

// ✅ i18next translation hook
import { useTranslation } from "react-i18next";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  // ✅ useTranslation hook
  const { t, i18n } = useTranslation();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);
  const closeMenu = () => setShowMobileMenu(false);

  // ✅ language change
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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
          {t("home")}
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => {
            setMenu("menu");
            closeMenu();
          }}
        >
          {t("menu")}
        </a>
        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => {
            setMenu("mobile-app");
            closeMenu();
          }}
        >
          {t("mobile_app")}
        </a>
        <Link
          to="/about"
          className={menu === "about" ? "active" : ""}
          onClick={() => {
            setMenu("about");
            closeMenu();
          }}
        >
          {t("about")}
        </Link>
        <Link
          to="/diet-plan"
          className={menu === "diet" ? "active" : ""}
          onClick={() => {
            setMenu("diet");
            closeMenu();
          }}
        >
          {t("diet_plan")}
        </Link>
        <Link
          to="/kids-meal"
          className={menu === "kids" ? "active" : ""}
          onClick={() => {
            setMenu("kids");
            closeMenu();
          }}
        >
          {t("kids_meal")}
        </Link>
        <Link
          to="/subscriptions"
          className={menu === "subscriptions" ? "active" : ""}
          onClick={() => {
            setMenu("subscriptions");
            closeMenu();
          }}
        >
          {t("subscription")}
        </Link>
        <Link
          to="/blog"
          className={menu === "blog" ? "active" : ""}
          onClick={() => {
            setMenu("blog");
            closeMenu();
          }}
        >
          {t("blog")}
        </Link>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => {
            setMenu("contact-us");
            closeMenu();
          }}
        >
          {t("contact_us")}
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

        {/* ✅ Language Selector */}
        <select onChange={changeLanguage} className="lang-switcher">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="or">ଓଡ଼ିଆ</option>
          <option value="bn">বাংলা</option>
          <option value="te">తెలుగు</option>
          <option value="ta">தமிழ்</option>
        </select>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>{t("sign_in")}</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Orders" />
                {t("orders")}
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                {t("logout")}
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
