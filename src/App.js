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
        <h1 className="title">Farm Product Prediction</h1>
        <div className="button-container">
          <button className="button" onClick={() => this.handleButtonClick('https://www.google.com')}>
            Base Price Sensor
          </button>
          <button className="button" onClick={() => this.handleButtonClick('#')}>
            Next Day
          </button>
          <button className="button" onClick={() => this.handleButtonClick('#')}>
            Live Bidding
          </button>
        </div>
      </div>
    );
  }
}

export default FarmProductPrediction;
