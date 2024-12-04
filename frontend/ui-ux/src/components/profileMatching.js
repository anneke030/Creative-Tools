import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Button from "./Button";
import "../App.css";
import anikaImage from "../images/Anika.png";
import sophiaImage from "../images/Sophia.png";
import irisImage from "../images/Iris.png";
import annekaImage from "../images/Anneka.png";
import raafayImage from "../images/Raafay.png";
import radhikaImage from "../images/Radhika.png";
import jamesImage from "../images/James.png";
import nagarajImage from "../images/Nagaraj.png";

const App = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const [cards, setCards] = useState([
    { name: "Anneke Anderson", role: "UI/UX Designer", image: annekaImage },
    { name: "Anika Ratakonda", role: "Graphic Designer", image: anikaImage },
    { name: "Raafay Shehzad", role: "Product Designer", image: raafayImage },
    { name: "Iris Wang", role: "Web Designer", image: irisImage },
    { name: "Radhika Patwardhan", role: "UI/UX Designer", image: radhikaImage },
    { name: "Sophia Tran", role: "UI/UX Designer", image: sophiaImage },
    { name: "James Featherston", role: "Web Designer", image: jamesImage },
    { name: "Nagaraj Veerappan", role: "Web Designer", image: nagarajImage }
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
      <Navbar />

      {/* Card Wrapper */}
      <div className="card-wrapper">
        {cards.length > 0 && (
          <div
            className={`card-container ${animationDirection}`}
            onAnimationEnd={handleAnimationEnd}
          >
            <Card>
              <div className="card-content">
                <img
                  src={currentCard.image}
                  alt={currentCard.name}
                  className="profile-image"
                />
                <h3>{currentCard.name}</h3>
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
            </Card>
          </div>
        )}
        {cards.length <= 0 && <Card>No more profiles</Card>}

        <div className="actions-container">
          <Button className="button-left" onClick={handlePrevious}>
            ←
          </Button>
          <Button className="button-right" onClick={handleNext}>
            →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;