import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Button from "./Button";
import "../App.css";

const App = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const [cards, setCards] = useState([
    { name: "Sophie Williams", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { name: "Michael Green", role: "Graphic Designer", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Laura James", role: "Product Designer", image: "https://randomuser.me/api/portraits/women/8.jpg" },
    { name: "Chris Howard", role: "Web Designer", image: "https://randomuser.me/api/portraits/men/9.jpg" }
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
