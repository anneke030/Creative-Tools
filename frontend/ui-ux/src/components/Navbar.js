import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      

      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            Menu
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/products">Profile Matching</a>
            </li>
            <li>
              <a href="/about">Explore</a>
            </li>
            <li>
              <a href="/contact">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;