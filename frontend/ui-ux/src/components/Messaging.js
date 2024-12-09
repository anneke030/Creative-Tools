import React from "react";
import './Messaging.css';
import raafayImage from "../images/Raafay.png";
import MessagingNavbar from "./Messaging_Navbar"; // Make sure the import path is correct

function Messaging() {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="messaging-container">
      {/* Custom Navbar */}
      <div className="messenger-navbar">
        <MessagingNavbar />
      </div>

      {/* Messaging Area */}
      <div className="messaging-main">
        {/* Header */}
        <div className="messaging-header">
          <img
            src={raafayImage}
            alt="User"
            className="profile-picture"
          />
          <div className="messenger-name">Raafay Shehzad</div>
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
