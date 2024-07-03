//import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home-background">
      <div className="home-container">
        <div className="image-container">
          <img src="." alt="Sausage on Stick" className="home-image"/>
          <div className="image-overlay">
            <h1 className="image-title">SAUSAGE ON STICK</h1>
            <p className="image-description">Premium chicken sausages deep fried & coated with garlic Schezwan Rub.</p>
          </div>
        </div>
        <section className="about">
          <h2>Who are we?</h2>
          <p>A contemporary casual dining cuisine that explores the diverse flavors of Nepal.</p>
          <p>At Cafemandu [pronounced: caff-mandu] we are passionate about the food we serve. Each item on the menu is made daily only using the freshest of the ingredients following traditional recipes with a modern twist.</p>
        </section>
        <section className="location">
          <h2>Where are you located?</h2>
          <p>3711 N. Beltline Road, Irving, TX 76035</p>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.3122127095!2d-97.00141128501739!3d32.83889458095616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c22bfa41b1d6f%3A0x5039e00d0a4f0f29!2sCafemandu!5e0!3m2!1sen!2sus!4v1629900046123!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
