import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <img src="/images/banner.jpg" alt="Banner Image" className="banner-image" />
        <div className="banner-text">
          <h2>Your Inspiring Headline Here</h2>
          <p>A brief, captivating description that draws visitors in.</p>
          {/* Optional: Add a call-to-action button */}
          {/* <button>Learn More</button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;