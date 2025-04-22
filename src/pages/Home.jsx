import React from 'react';
import './Home.css';
import cloudImage from '/assets/cloud.png'; 

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img
          src={cloudImage}
          alt="Banner Image"
          className="banner-image"
        />
        <div className="banner-text">
          <h2>Isabela Selleck</h2>
          <p> Look at me I found my wings.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;