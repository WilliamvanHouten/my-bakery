import React from 'react';
import './menu.css';

const MenuPage = () => {
  return (
    <div className="menu-container">
      <video className="menu-video" autoPlay muted loop>
        <source src="donut.mp4" type="video/mp4" />
      </video>
      <h1 className="menu-heading">Menu</h1>
      <ul className="image-list">
        <li><img src="menu1.png" alt="menu1-item" /></li>
        <li><img src="menu2.png" alt="menu2-item" /></li>
        <li><img src="menu3.png" alt="menu3-item" /></li>
        <li><img src="menu4.png" alt="menu4-item" /></li>
        <li><img src="menu5.png" alt="menu5-item" /></li>
      </ul>
    </div>
  );
};

export default MenuPage;