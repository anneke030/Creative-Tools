import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/home" className="logo">
            Menu
          </a>
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
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;