import React from "react";
import './Messaging.css';

function Messaging() {
  return (
    <div className="messaging-container">
      {/* Navbar */}
      <div className="messaging-navbar">
        <div className="navbar-top">
          <a href="/" className="logo">
            ripple
          </a>
          <ul className="nav-links">
            <li>
              <a href="#option1">Option 1</a>
            </li>
            <li>
              <a href="#option2">Option 2</a>
            </li>
            <li>
              <a href="#option3">Option 3</a>
            </li>
            <li>
              <a href="#option4">Option 4</a>
            </li>
          </ul>
        </div>
        <div className="navbar-bottom">
          <a href="#profile">Profile</a>
          <a href="#more">More</a>
        </div>
      </div>

      {/* Messaging Area */}
      <div className="messaging-main">
        {/* Header */}
        <div className="messaging-header">
          <img
            src="https://randomuser.me/api/portraits/women/5.jpg"
            alt="User"
            className="profile-picture"
          />
          <h3 className="username">Sophie Williams</h3>
        </div>

        {/* Message Window */}
        <div className="message-window">
          <div className="message received">
            <p>Hello! How are you?</p>
          </div>
          <div className="message sent">
            <p>I'm good, thank you! What about you?</p>
          </div>
        </div>

        {/* Input Bar */}
        <div className="message-input-bar">
          <input
            type="text"
            placeholder="Type a message..."
            className="message-input"
          />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messaging;
