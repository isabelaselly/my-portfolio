import React from 'react';
import './Home.css'; // Import the CSS file for this page

function Home() {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <img src= "../../assets/cloud.png" alt="Banner Image" className="banner-image" onError={(e)=>{e.target.onerror = null; e.target.src="/images/default-banner.png"}} />
        <div className="banner-text">
          <h2>Isabela Selleck  </h2>
          <p> Look at me I found my wings.</p>
          {/* Optional: Add a call-to-action button */}
          {/* <button>Learn More</button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;