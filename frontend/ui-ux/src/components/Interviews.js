import React, { useState } from "react";
import './Interviews.css';
import MessagingNavbar from "./Messaging_Navbar"; // Reusing the Messaging Navbar
import raafayImage from "../images/Raafay.png"

function Interviews() {
  const [timeBlocks, setTimeBlocks] = useState([
    { date: "2024-12-08", time: "10:00 AM", booked: false },
    { date: "2024-12-08", time: "12:00 PM", booked: false },
    { date: "2024-12-08", time: "02:00 PM", booked: false },
    { date: "2024-12-09", time: "11:00 AM", booked: false },
    { date: "2024-12-09", time: "01:00 PM", booked: false },
  ]);

  const raafay = {
    name: "Raafay Shehzad",
    profileImage: raafayImage
  };

  const toggleBooking = (index) => {
    const updatedBlocks = [...timeBlocks];
    updatedBlocks[index].booked = !updatedBlocks[index].booked;
    setTimeBlocks(updatedBlocks);
  };

  return (
    <div className="interviews-container">
      {/* Custom Navbar */}
      <div className="interviews-navbar">
        <MessagingNavbar />
      </div>

      {/* Interviews Section */}
      <div className="interviews-main">
        <div className="interviews-header">
          <div>schedule interviews</div>
        </div>

        {/* Calendar View */}
        <div className="calendar">
          {timeBlocks.map((block, index) => (
            <div
              key={index}
              className={`time-block ${block.booked ? "booked" : "available"}`}
              onClick={() => toggleBooking(index)}
            >
              <p>{block.date} - {block.time}</p>
              {block.booked ? (
                <div className="profile-container"> 
                <div className="booked">Booked!</div>
                  <img src={raafay.profileImage} alt={`${raafay.name}'s profile`} className="profile-image" />
                  <span className="profile-name">{raafay.name}</span>
                </div>
              ) : (
                <span className="status">Available</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interviews;
