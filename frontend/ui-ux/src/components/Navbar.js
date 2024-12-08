import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../assets/logo.png"
import home from "../assets/home.png"
import search from "../assets/search.png"
import explore from "../assets/explore.png"
import match from "../assets/match.png"
import rewards from "../assets/rewards.png"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-left">
        <a href="/home" className="navbar-link">
        <img className="logo" src={logo} alt="Logo" />
        <div>ripple</div>
        </a>
      </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <div className="home">
              <Link to="/home">
              <img className="navbar-logos" src={home}/>
              <div>home</div></Link>
              </div>
            </li>
            <li>
              <div className="search">
                <Link to="/search">
                <img className="navbar-logos" src={search}/>
                <div>search</div></Link>
              </div>
            </li>
            <li>
              <div className="explore">
                <Link to="/explore">
                <img className="navbar-logos" src={explore}/>
                <div>explore</div></Link>
              </div>
            </li>
            <li>
              <div className="match">
                  <Link to="/profileMatching">
                  <img className="navbar-logos" src={match}/>
                  <div>match</div></Link>
              </div>
            </li>
            <li>
              <div className="rewards">
                <Link to="/rewards">
                <img className="navbar-logos" src={rewards}/>
              <div>rewards</div></Link>
              </div>
            </li>
          </ul>
        </div>

        
      </nav>
    </>
  );
};

export default Navbar;
