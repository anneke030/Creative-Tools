import React from "react";
import './History.css';
import MessagingNavbar from "./Messaging_Navbar";
import webpageImage from "../images/skygarden.jpg";
import participant1Image from "../images/Raafay.png"; // Replace with actual image path
import participant2Image from "../images/James.png"; // Replace with actual image path

function History() {
  const historyLogs = [
    {
      id: 1,
      date: "2024-12-01",
      description: "Updated the homepage layout to include a new navigation bar.",
    },
    {
      id: 2,
      date: "2024-12-03",
      description: "Improved color contrast for accessibility compliance.",
    },
    {
      id: 3,
      date: "2024-12-05",
      description: "Adjusted font sizes for better readability across devices.",
    },
    {
      id: 4,
      date: "2024-12-07",
      description: "Optimized images to improve loading times on mobile.",
    },
  ];

  const participants = [
    { id: 1, name: "Raafay Shehzad", image: participant1Image },
    { id: 2, name: "James Featherson", image: participant2Image },
  ];

  return (
    <div className="history-container">
      <div className="history-navbar">
        <MessagingNavbar />
      </div>
      <div className="history-main">
        {/* Webpage Preview and Participants Section */}
        <div className="webpage-participants">
          <div className="webpage-preview">
            <img src={webpageImage} alt="Webpage preview" className="preview-image" />
          </div>

          {/* Participants Section */}
          <div className="participants-section">
            <div className="participants-title">Participants</div>
            {participants.map((participant) => (
              <div key={participant.id} className="participant-item">
                <img
                  src={participant.image}
                  alt={participant.name}
                  className="participant-image"
                />
                <div className="participant-name">{participant.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* History Logs */}
        <div className="history-timeline">
          <div className="timeline-title">edit history</div>
          {historyLogs.map((log) => (
            <div key={log.id} className="timeline-item">
              <div className="timeline-date">{log.date}</div>
              <div className="timeline-description">{log.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
