import React from 'react';
import './index.css';
import Navbar from './components/Navbar.js';

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1 class="header">Welcome to ____!</h1>
      <p>Homepage</p>
    </div>
  );
}

export default HomePage;