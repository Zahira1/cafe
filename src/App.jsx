import React, { useState } from 'react';
import Home from './component/Home';
import './component/Header.css';
import Delivery from './component/Delivery';
//import Header from './component/Header';
import './App.css'
import Menu from './component/Menu';
function App() {
  const [message, setMessage] = useState('');
  const [currentSection, setCurrentSection] = useState('Home');
  const handleClick = (section) => {
    setMessage(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'Home':
        return <Home />;
      case 'Menu':
        return <Menu />;
      case 'Order Online':
        return <OrderOnline />;
      case 'Delivery':
        return <Delivery />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="App">
     <header className="header ">
      <div className="container header text-center py-3">
        
        <div className="title h1 ">CAFE AROMA</div>
        <div className="subtitle bg-warning text-white d-inline-block px-3 py-1 mt-2 rounded">
          FLAVORS OF NEPAL
        </div>
        <nav className="nav justify-content-center mt-3">
        <button className="nav-link btn btn-warning mx-1" onClick={() => setCurrentSection('Home')}>Home</button>
            <button className="nav-link btn btn-warning mx-1" onClick={() => setCurrentSection('Menu')}>Menu</button>
            <button className="nav-link btn btn-warning mx-1" onClick={() => setCurrentSection('Order Online')}>Order Online</button>
            <button className="nav-link btn btn-warning mx-1" onClick={() => setCurrentSection('Delivery')}>Delivery</button>
          </nav>
        
      </div>
    </header>
    {renderSection()}
  </div>
  )
}

export default App
