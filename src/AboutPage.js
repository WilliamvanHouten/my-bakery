import React from 'react';
import Navigation from './Navigation';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <Navigation />
      <h1 className="about-heading">About Us</h1>

      <div className="about-content">
        <div className="about-section">
          <h2>Brief History</h2>
          <p>Founded in 1934, our bakery has a rich history that spans over eight decades.
             We take pride in our heritage, as our recipes have been passed down through generations
             for more than 150 years. Every treat we create carries the essence of tradition and craftsmanship.</p>
        </div>
        <div className="about-section">
          <h2>Mission</h2>
          <p>Our mission is to bring joy to people's lives by creating delicious baked goods 
             using time-honored recipes and the finest ingredients. We aim to create a warm and 
             welcoming environment that brings together families and friends to share memorable 
             moments over our delightful treats.</p>
        </div>
        <div className="about-section">
          <h2>Values</h2>
          <p>We value quality, tradition, and community. We are committed to maintaining the 
             highest standards of baking excellence, preserving the authenticity of our recipes, 
             and contributing positively to the communities we serve. Our dedication to these values 
             shapes every aspect of our bakery's operations.</p>
        </div>
      </div>
      
     
    </div>
  );
};

export default AboutPage;