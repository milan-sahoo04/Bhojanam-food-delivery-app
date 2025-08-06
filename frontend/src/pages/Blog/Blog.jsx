import React from "react";
import "./Blog.css";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <p className="blog-subheading">
        Dive into a world of delicious recipes, culinary tips, and stories from
        our kitchen.
      </p>

      <div className="blog-cards">
        {/* ✅ Blog 1 Card */}
        <div
          className="blog-card"
          onClick={() => navigate("/blog/1")}
          style={{ cursor: "pointer" }}
        >
          <div className="blog-image">
            <img src={blog1} alt="Blog 1" />
          </div>
          <div className="blog-info">
            <h2>Homely Khana Daily Delights: Bringing to Your Doorstep</h2>
            <p>
              Introduction: Welcome to the heart and soul of Homely Khana, where
              every day is a new opportunity to savor...
            </p>
          </div>
        </div>

        {/* ✅ Blog 2 Card */}
        <div
          className="blog-card"
          onClick={() => navigate("/blog/2")}
          style={{ cursor: "pointer" }}
        >
          <div className="blog-image">
            <img src={blog2} alt="Blog 2" />
          </div>
          <div className="blog-info">
            <h2>How Fraudulent Middlemen Scam Tiffin Vendors</h2>
            <p>
              In today’s fast-paced world, tiffin services have become a
              convenient and popular solution...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
