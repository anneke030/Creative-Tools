import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/home" className="logo">
            Menu
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <Link to="/profile-matching">Profile Matching</Link> {/* Use Link for routing */}
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
