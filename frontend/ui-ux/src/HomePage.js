import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.js';

function HomePage() {
  return (
    <div>
      <Navbar />
      {/* Blue Rectangle */}
      <div className="blue-rectangle"></div>
      <h1 className="welcome">welcome!</h1> {/* Corrected class attribute */}
      <p className="slogan">Connect with the world of design</p>
      <p className="text">get started today!</p>
      <p className="bullets">• connect with other designers</p>
      <p className="bullets">• description of website</p>
       {/* Circle Button */}
       <Link to="/profile">
        <div className="circle"></div>
      </Link>
    </div>
  );
}

export default HomePage;