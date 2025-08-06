import React from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";

const blogContent = {
  1: {
    title: "Homely Khana Daily Delights: Bringing to Your Doorstep",
    date: "February 26, 2024",
    author: "homelykhana.com",
    content: [
      `Introduction:`,
      `Welcome to the heart and soul of Homely Khana, where every day is a new opportunity to savor the comfort and flavors of home...`,
      `Exploring Our Menu:`,
      `Step into our kitchen and discover a world of flavor waiting to be explored...`,
      `A Taste of Home, Every Day:`,
      `Each dish is infused with love, delivering warmth and joy with every bite...`,
      `From Our Kitchen to Your Doorstep:`,
      `Forget the stress of grocery shopping — we've got you covered...`,
      `Conclusion:`,
      `We hope you’ve enjoyed discovering the flavors of home with us.`,
    ],
  },
  2: {
    title:
      "How Fraudulent Middlemen Are Scamming Tiffin Service Customers and Vendors",
    date: "August 5, 2024",
    author: "homelykhana.com",
    content: [
      `The Scam Explained`,
      `Step 1: The Promotion — Fake ads, fake reviews...`,
      `Step 2: Gaining Customer Trust — Convincing communication...`,
      `Step 3: Payment Collection — Collect upfront fees...`,
      `Step 4: Ordering from Vendors — They place real orders but don't pay...`,
      `Step 5: Defaulting on Payments — Vendors lose money and reputation...`,
      `Protecting Yourself from Scams — Check FSSAI, visit outlets, get reviews...`,
      `Conclusion:`,
      `Choose genuine providers. Stay safe and eat well.`,
    ],
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogContent[id];

  if (!blog) return <div className="blog-detail">Blog Not Found</div>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p className="blog-meta">
        By {blog.author} / {blog.date}
      </p>
      <div className="blog-body">
        {blog.content.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="comment-box">
        <h2>Leave a Comment</h2>
        <form>
          <textarea placeholder="Your comment..." required />
          <div className="comment-fields">
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="text" placeholder="Website" />
          </div>
          <label>
            <input type="checkbox" /> Save my info for next time.
          </label>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetail;
