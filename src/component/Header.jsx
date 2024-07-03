import React, { useState } from 'react';
import './Header.css';
//import logo from './logo.png'; // Ensure you have a logo file in the src directory

const Header = () => {
  const [message, setMessage] = useState('');

  const handleClick = (section) => {
    setMessage(`You clicked on ${section}`);
  };

  return (
    <header className="header ">
      <div className="container header text-center py-3">
        
        <div className="title h1 ">CAFE AROMA</div>
        <div className="subtitle bg-warning text-white d-inline-block px-3 py-1 mt-2 rounded">
          FLAVORS OF NEPAL
        </div>
        <nav className="nav justify-content-center mt-3">
          <button className="nav-link btn btn-warning mx-1 nav" onClick={() => handleClick('Home')}>Home</button>
          <button className="nav-link btn btn-warning mx-1 nav" onClick={() => handleClick('Menu')}>Menu</button>
          <button className="nav-link btn btn-warning mx-1 nav" onClick={() => handleClick('Order Online')}>Order Online</button>
          <button className="nav-link btn btn-warning mx-1 nav" onClick={() => handleClick('Delivery')}>Delivery</button>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
