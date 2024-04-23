import React from 'react';
import './App.css';

class FarmProductPrediction extends React.Component {
  handleButtonClick = (url) => {
    // Redirect to the specified URL
    window.location.href = url;
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Services</h1>
        <div className="button-container">
          <button className="button" onClick={() => this.handleButtonClick('https://baseprice-2.onrender.com/')}>
            Base Price Sensor
          </button>
          <button className="button" onClick={() => this.handleButtonClick('http://localhost:3002/')}>
            Next Day
          </button>
          <button className="button" onClick={() => this.handleButtonClick('http://localhost:3003/')}>
            Live Bidding
          </button>
        </div>
      </div>
    );
  }
}

export default FarmProductPrediction;
