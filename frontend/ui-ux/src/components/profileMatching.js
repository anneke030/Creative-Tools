import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Button from "./Button";
import "./profileMatching.css";

import anikaImage from "../images/Anika.png";
import sophiaImage from "../images/sophia.png";
import irisImage from "../images/Iris.png";
import annekeImage from "../images/anneke_professional.jpg";
import raafayImage from "../images/Raafay.png";
import jamesImage from "../images/James.png";

const App = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const [cards, setCards] = useState([
    { name: "Iris Wang", role: "Graphic Designer", image: irisImage },
    { name: "Raafay Shehzad", role: "Product Designer", image: raafayImage },
    { name: "Anika Ratakonda", role: "Web Designer", image: anikaImage },
    { name: "Anneke Anderson", role: "Frontend Developer", image: annekeImage },
    { name: "Sophia Tran", role: "UI/UX Designer", image: sophiaImage },
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setAnimationDirection("swipe-left");
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setAnimationDirection("swipe-right");
  };

  const handleCheck = () => {
    // Navigate to /messaging
    navigate("/messaging");
  };

  const handleReject = () => {
    alert("Bye bye...");
  };

  const handleAnimationEnd = () => {
    setAnimationDirection("");
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="app-container">
      {/* Sidebar (Navbar) */}
      <div className="sidebar">
        <Navbar />
      </div>

      {/* Main Content Wrapper */}
      <div className="main-content">
        {/* Left Section: Card Wrapper and Buttons */}
        <div className="card-section">
          {cards.length > 0 && (
            <div
              className={`card-container ${animationDirection}`}
              onAnimationEnd={handleAnimationEnd}
            >
              <Card>
                
                  <div className="profile-details-container">
                  <div className="card-content">
            
                    <img
                      src={currentCard.image}
                      alt={currentCard.name}
                      className="profile-matching-image"
                    />
                    <p className="match-name">{currentCard.name}</p>
                    <p>{currentCard.role}</p>
                    <div className="action-buttons">
                      <button
                        className="checkmark-button"
                        onClick={handleCheck}
                      >
                        ✔
                      </button>
                      <button
                        className="x-button"
                        onClick={handleReject}
                      >
                        ✖
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
          {cards.length <= 0 && <Card>No more profiles</Card>}

          {/* Action buttons */}
          <div className="actions-container">
            <Button className="button-left" onClick={handlePrevious}>
              ←
            </Button>
            <Button className="button-right" onClick={handleNext}>
              →
            </Button>
          </div>
        </div>

        {/* Right Section: Profile Info and Matched Card */}
        <div className="right-section">
          {/* Profile Info */}
          <div className="profile-info">
            <img className="small-profile-image" src={annekeImage} alt="Anneke Anderson" />
            <div className="username">@anneke.anderson</div>
          </div>
          {/* Mini Header */}
          <div className="matched-header">matched with you</div>

          {/* Matched Card */}
          <div className="matched-card">
            <img
              src={jamesImage}
              alt="James Featherson"
              className="matched-card-image"
            />
            <p className="matched-card-name">James Featherson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;