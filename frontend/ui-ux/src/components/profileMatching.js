import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Button from "./Button";
import "./profileMatching.css";

import rightArrow from "../assets/right-arrow.png";
import leftArrow from "../assets/left-arrow.png";

import anikaImage from "../images/Anika.png";
import sophiaImage from "../images/sophia.png";
import irisImage from "../images/Iris.png";
import annekeImage from "../images/anneke_professional.jpg";
import raafayImage from "../images/Raafay.png";
import radhikaImage from "../images/Radhika.png";
import jamesImage from "../images/James.png"; // Added import

const App = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([
    { name: "Radhika Patwardhan", role: "UI/UX Designer", pronouns: "she/her", image: radhikaImage },
    { name: "Sophia Tran", role: "Frontend Developer", pronouns: "she/her", image: sophiaImage },
    { name: "Iris Wang", role: "Graphic Designer", pronouns: "she/her", image: irisImage },
    { name: "Anika Ratakonda", role: "Financial Advisor", pronouns: "she/her", image: anikaImage },
    { name: "Raafay Shehzad", role: "Tech Consultant", pronouns: "he/him", image: raafayImage },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [toggleOption, setToggleOption] = useState("people");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setAnimationDirection("swipe-left");
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setAnimationDirection("swipe-right");
  };

  const handleCheck = () => {
    alert("Profile checked!");
  };

  const handleReject = () => {
    alert("Profile rejected!");
  };

  const handleAnimationEnd = () => {
    setAnimationDirection("");
  };

  const handleToggle = (option) => {
    setToggleOption(option);
    setCurrentIndex(0);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="app-container">
      <div className="sidebar">
        <Navbar />
      </div>

      <div className="main-content">
        <div className="card-section">
          <div className="matching-header">match</div>

          <div className="toggle-container">
            <div
              className={`toggle-option ${toggleOption === "people" ? "active" : ""}`}
              onClick={() => handleToggle("people")}
            >
              match with people
            </div>
            <div
              className={`toggle-option ${toggleOption === "projects" ? "active" : ""}`}
              onClick={() => handleToggle("projects")}
            >
              match with projects
            </div>
          </div>

          {cards.length > 0 && (
            <div
              className={`card-container ${animationDirection}`}
              onAnimationEnd={handleAnimationEnd}
            >
              <Button onClick={handlePrevious}>
                <img className="button-left" src={leftArrow} />
              </Button>

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
              <Button onClick={handleNext}>
                <img className="button-right" src={rightArrow} />
              </Button>
            </div>
          )}
          {cards.length <= 0 && <Card>No more profiles</Card>}
        </div>

        <div className="right-section">
          <div className="profile-info">
            <img className="small-profile-image" src={annekeImage} alt="Anneke Anderson" />
            <div className="username">@anneke.anderson</div>
          </div>
          <div className="matched-header">matched with you</div>
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
