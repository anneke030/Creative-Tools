import React from 'react';
import './HomePage.css';
import Navbar from './components/Navbar.js';

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Left Container: Navbar */}
      <div className="navbar-container">
        <Navbar />
      </div>
      
      {/* Middle Container: Content */}
      <div className="content-container">
        {/* Blue Rectangle */}
        <div className="description">
          <p className="make">make a <br></br> difference.</p>
          <p className="slogan">connect with the world of design</p>
          <p className="bullets">• connect with other designers <br></br>
          • design your story</p>

           <button className="find-out-more-button">find out more</button>
        </div>
        
        </div>

        {/* Right Container: Image */}

      </div>
  );
}

export default HomePage;