import React from "react";
import './Messaging.css';

function Messaging() {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="messaging-container">
      {/* Custom Navbar */}
      <div className="messenger-navbar">
        <a href="/" className="logo">ripple</a>
        <ul className="nav-links">
          <li><a href="#messages">Messages</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><a href="#groups">Groups</a></li>
          <li><a href="#settings">Settings</a></li>
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
            <span className="timestamp">{getCurrentTime()}</span>
          </div>
          <div className="message sent">
            <p>I'm good, thank you! What about you?</p>
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