import React, { useRef, useState } from "react";
import "./About.css";
import aboutImage from "../../assets/about.png";
import hygiene from "../../assets/hygiene.png";
import oil from "../../assets/oil.png";
import cooked from "../../assets/cooked.png";
import delivery from "../../assets/delivery.png";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";
import customer3 from "../../assets/customer3.png";
import customer4 from "../../assets/customer4.png";

const testimonials = [
  { avatar: customer1 },
  { avatar: customer2 },
  { avatar: customer3 },
  { avatar: customer4 },
];

const About = () => {
  const scrollRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const submitFeedback = () => {
    alert(`Thank you for rating us ${rating} star(s)!`);
    setShowModal(false);
    setRating(0);
    setComment("");
  };

  return (
    <div className="about-page">
      {/* Who We Are */}
      <section className="about-section">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <div className="about-text">
          <h1>Who we are...</h1>
          <p>
            Homely Khana is a cloud kitchen based in Bhubaneswar, Odisha,
            offering healthy, hygienic & home-cooked food at your doorstep.
          </p>
          <p>
            "Homely khana" means food like that cooked by our mother—synonymous
            with love and care.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p className="why-desc">
          We deliver home-cooked, hygienic, less oily and less spicy food with
          doorstep delivery in Bhubaneswar.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <img src={hygiene} alt="Hygiene Maintained" />
            <h3>Hygiene Maintained</h3>
          </div>
          <div className="feature-card">
            <img src={oil} alt="Less Oil & Spices" />
            <h3>Less Oil & Spices</h3>
          </div>
          <div className="feature-card">
            <img src={cooked} alt="Homely Cooked" />
            <h3>Homely Cooked</h3>
          </div>
          <div className="feature-card">
            <img src={delivery} alt="Home Delivery" />
            <h3>Home Delivery</h3>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="testimonial-header">
          <h2>What Customer Says?</h2>
          <p>
            Commendations on Google, Facebook, Instagram, Swiggy & Zomato
            validate our commitment to quality.
          </p>
          <button className="rate-us-btn" onClick={() => setShowModal(true)}>
            Rate us now
          </button>
        </div>
        <div className="testimonial-slider-wrapper">
          <button className="nav-arrow left" onClick={() => scroll("left")}>
            &#8592;
          </button>
          <div className="testimonial-slider" ref={scrollRef}>
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <img src={item.avatar} alt={`Customer ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="nav-arrow right" onClick={() => scroll("right")}>
            &#8594;
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="rating-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Rate Us</h2>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${
                    star <= (hover || rating) ? "filled" : ""
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <textarea
              placeholder="Leave a comment (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="submit-rating" onClick={submitFeedback}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
