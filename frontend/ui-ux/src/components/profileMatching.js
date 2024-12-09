import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Button from "./Button";
import "./profileMatching.css";

import rightArrow from "../assets/right-arrow.png";
import leftArrow from "../assets/left-arrow.png";
import x from "../assets/x.png"
import check from "../assets/check.png"


import anikaImage from "../images/Anika.png";
import sophiaImage from "../images/sophia.png";
import irisImage from "../images/Iris.png";
import annekeImage from "../images/anneke_professional.jpg";
import raafayImage from "../images/Raafay.png";
import radhikaImage from "../images/Radhika.png";
import jamesImage from "../images/James.png";

const App = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const [cards, setCards] = useState([
    {
      name: "Radhika Patwardhan",
      role: "UI/UX Designer",
      pronouns: "she/her",
      image: radhikaImage,
      skills: ["Figma", "user research"],
      experience: "3 years in product design",
    },
    {
      name: "Sophia Tran",
      role: "Frontend Developer",
      pronouns: "she/her",
      image: sophiaImage,
      skills: ["React", "CSS", "TypeScript"],
      experience: "2 years in web development",
    },
    {
      name: "Iris Wang",
      role: "Graphic Designer",
      pronouns: "she/her",
      image: irisImage,
      skills: ["Adobe Illustrator", "branding"],
      experience: "4 years in graphic design",
    },
    {
      name: "Raafay Shehzad",
      role: "Tech Consultant",
      pronouns: "he/him",
      image: raafayImage,
      skills: ["cloud computing", "data analysis"],
      experience: "6 years in tech consulting",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [toggleOption, setToggleOption] = useState("people");

  const handleAnimationEnd = () => {
    setAnimationDirection("");
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setAnimationDirection("swipe-left");
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setAnimationDirection("swipe-right");
  };

  const handleToggle = (option) => {
    setToggleOption(option);
    setCurrentIndex(0);
  };

  const currentCard = cards[currentIndex];

  const buttonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

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
              <Button onClick={() => { buttonClick(); handlePrevious(); }}>
                <img className={`button-left ${isClicked ? "clicked" : ""}`} src={leftArrow} />
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
                    <p>{currentCard.role} • {currentCard.pronouns}</p>
                    <p className="skills">
                      skills:{" "}
                      {currentCard.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </p>
                    <p className="experience">background: {currentCard.experience}</p>
                    <div className="action-buttons">
                      <a href="/messaging">
                        <button
                          className="checkmark-button"
                          onClick={buttonClick}
                        >
                          <img className="options" src={check}/>                        </button>
                      </a>
                      <button
                        className="x-button"
                        onClick={buttonClick}
                      >
                        <img className="options" src={x}/>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
              <Button onClick={() => { buttonClick(); handleNext(); }}>
                <img className={`button-right ${isClicked ? "clicked" : ""}`} src={rightArrow} />
              </Button>
            </div>
          )}
          {cards.length <= 0 && <Card>No more profiles</Card>}
        </div>

        <div className="right-section">
          <div className="profile-info">
            <img className="small-profile-image" src={annekeImage} alt="Anneke Anderson" />
            <div className="small-profile-contents">
              <div className="username">@anneke.anderson</div>
              <div className="username-profession">Frontend Developer</div>
            </div>
          </div>
          <div className="matched-header">matched with you</div>
          <div className="matched-card">
            <img
              src={jamesImage}
              alt="James Featherson"
              className="matched-card-image"
            />
            <p className="matched-card-name">James Featherson</p>
            <div className="matched-card-info">
              <p className="matched-card-role">Fullstack Developer</p>
              <p className="matched-card-pronouns">he/him</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;