import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

// Pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import KidsMealBox from "./pages/KidsMealBox/KidsMealBox";
import PersonalizedDiet from "./pages/PersonalizedDiet/PersonalizedDiet";
import SubscriptionPlans from "./pages/SubscriptionPlans/SubscriptionPlans"; // ✅ Add this route
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/diet-plan" element={<PersonalizedDiet />} />
          <Route path="/kids-meal" element={<KidsMealBox />} />
          <Route path="/subscriptions" element={<SubscriptionPlans />} />{" "}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          {/* ✅ Added here */}
        </Routes>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default App;
