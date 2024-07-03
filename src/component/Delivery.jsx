
import './Delivery.css';

const Delivery = () => {
  return (
    <div className="delivery-background">
      <div className="delivery-container">
        <h2 className="delivery-title">Order Delivery</h2>
        <p className="delivery-description">Get your favorite dishes delivered to your doorstep with our delivery partners.</p>
        <div className="delivery-links">
          <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className="delivery-link">
            <img src="path/to/uber-eats-logo.png" alt="Uber Eats" className="delivery-logo" />
            Uber Eats
          </a>
          <a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer" className="delivery-link">
            <img src="path/to/grubhub-logo.png" alt="Grubhub" className="delivery-logo" />
            Grubhub
          </a>
          <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className="delivery-link">
            <img src="path/to/doordash-logo.png" alt="DoorDash" className="delivery-logo" />
            DoorDash
          </a>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
