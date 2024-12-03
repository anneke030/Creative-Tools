import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            ripple
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/search">search</Link>
            </li>
            <li>
              <Link to="/explore">explore</Link>
            </li>
            <li>
              <Link to="/profileMatching">match</Link>
            </li>
            <li>
              <Link to="/about-us">about Us</Link>
            </li>
          </ul>
        </div>

        {/* New Bottom Navbar Section */}
        <div className="navbar-bottom">
          <Link to="/profile" className="bottom-link">
            Profile
          </Link>
          <Link to="/more" className="bottom-link">
            More
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
