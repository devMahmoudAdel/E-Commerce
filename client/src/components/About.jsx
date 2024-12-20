import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your one-stop shop for all your e-commerce needs!</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to our e-commerce platform! We are a team of passionate developers,
          designers, and entrepreneurs dedicated to delivering the best online shopping
          experience.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make online shopping easy, accessible, and enjoyable for
          everyone. We believe in quality products, exceptional customer service, and
          a seamless user experience.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>A wide range of products at competitive prices</li>
          <li>Fast and secure checkout process</li>
          <li>Reliable delivery services</li>
          <li>24/7 customer support</li>
        </ul>
      </section>

      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Your E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
