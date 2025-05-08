import React from "react";
import { Link } from "react-router-dom";
import"./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1 className="logo2">MODERN LIFESTYLE STORE</h1>
          <Link to="/products" className="shop-btn">Shop Now</Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>Elevate your everyday</h2>
        <div className="content">
          <img src="/src/assets/Images/home2.jpeg" alt="Lifestyle" />
          <div className="text">
            <p>
            Welcome to Modern Lifestyle Store, where elegance meets functionality! ✨
            <br />
            <br />
            What sets us apart? We curate high-quality, stylish,
            and timeless furniture pieces that blend seamlessly into your home.
            Our collection is carefully designed to bring comfort,
            sophistication, and practicality to your everyday life.
            <br />
            <br />
            Transform your space with Modern Lifestyle Store—because your home deserves the best! 🏡✨
            </p>
            <Link to="/products" className="learn-btn">LEARN MORE</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
