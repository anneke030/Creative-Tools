import React from "react";
import './Messaging.css';
import annekeImage from "../assets/anneke_professional.jpg"

function Messaging() {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="messaging-container">
      {/* Custom Navbar */}
      <div className="messenger-navbar">
        <h1><a href="/home" className="logo">ripple</a>
        </h1>
        <ul className="nav-links">
          <li><a href="#messages">messages</a></li>
          <li><a href="#interviews">interviews</a></li>
          <li><a href="#tasks">tasks</a></li>
          <li><a href="#history">history</a></li>
        </ul>
        <div className="navbar-bottom">
          <a href="#profile">Profile</a>
          <a href="#logout">Logout</a>
        </div>
      </div>

      {/* Messaging Area */}
      <div className="messaging-main">
        {/* Header */}
        <div className="messaging-header">
          <img
            src= { annekeImage }
            alt="User"
            className="profile-picture"
          />
          <h3 className="username">Anneke Anderson</h3>
        </div>

        {/* Message Window */}
        <div className="message-window">
          <div className="message sent">
            <p>Hello! How are you?</p>
            <span className="timestamp">{getCurrentTime()}</span>
          </div>
          <div className="message received">
            <p>I'm good, thank you! When are you free for an interview?</p>
            <span className="timestamp">{getCurrentTime()}</span>
          </div>
        </div>

        {/* Input Bar */}
        <div className="message-input-bar">
          <input type="text" placeholder="Type a message..." className="message-input" />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messaging;