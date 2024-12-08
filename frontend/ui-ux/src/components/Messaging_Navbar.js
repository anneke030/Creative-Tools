import React from "react";
import { Link } from "react-router-dom";
import './Messaging_Navbar.css';
import logo from "../assets/logo.png"
import messaging from "../assets/messaging.png"
import interviews from "../assets/interviews.png"
import tasks from "../assets/tasks.png"
import history from "../assets/history.png"

const MessagingNavbar = () => {
  return (
    <>
      <nav className="m-navbar">
      <div className="m-navbar-left">
        <a href="/home" className="m-navbar-link">
        <img className="logo" src={logo} alt="Logo" />
        <div>ripple</div>
        </a>
      </div>
        <div className="m-navbar-center">
          <ul className="m-nav-links">
          <li>
            <div className="messaging">
                <Link to="/messaging">
                <img className="m-navbar-logos" src={messaging}/>
                <div>messaging</div></Link>
            </div>
            </li>
            <li>
              <div className="interviews">
              <Link to="/interviews">
              <img className="m-navbar-logos" src={interviews}/>
              <div>interviews</div></Link>
              </div>
            </li>
            <li>
              <div className="tasks">
                <Link to="/tasks">
                <img className="m-navbar-logos" src={tasks}/>
                <div>tasks</div></Link>
              </div>
            </li>
            <li>
              <div className="history">
                  <Link to="/history">
                  <img className="m-navbar-logos" src={history}/>
                  <div>history</div></Link>
              </div>
            </li>
          </ul>
        </div>

        
      </nav>
    </>
  );
};

export default MessagingNavbar;
