import React, { Component } from "react";
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


class App extends Component {
  state = {
    cards: [
      { name: "Anneke Anderson", role: "UI/UX Designer", image: annekaImage },
      { name: "Anika Ratakonda", role: "Graphic Designer", image: anikaImage },
      { name: "Raafay Shehzad", role: "Product Designer", image: raafayImage },
      { name: "Iris Wang", role: "Web Designer", image: irisImage },
      { name: "Radhika Patwardhan", role: "UI/UX Designer", image: radhikaImage },
      { name: "Sophia Tran", role: "UI/UX Designer", image: sophiaImage },
      { name: "James Featherston", role: "Web Designer", image: jamesImage },
      { name: "Nagaraj Veerappan", role: "Web Designer", image: nagarajImage }
    ],
    currentIndex: 0,
    animationDirection: "",
    matchMode: "people", // Track current match mode
  };

  handleNext = () => {
    this.setState(({ currentIndex, cards }) => ({
      currentIndex: (currentIndex + 1) % cards.length,
      animationDirection: "swipe-left",
    }));
  };

  handlePrevious = () => {
    this.setState(({ currentIndex, cards }) => ({
      currentIndex: (currentIndex - 1 + cards.length) % cards.length,
      animationDirection: "swipe-right",
    }));
  };

  handleCheck = () => {
    alert("Matched!");
  };

  handleReject = () => {
    alert("Bye bye...");
  };

  handleAnimationEnd = () => {
    this.setState({ animationDirection: "" });
  };

  handleToggleMatchMode = (mode) => {
    this.setState({ matchMode: mode });
  };

  render() {
    const { cards, currentIndex, animationDirection, matchMode } = this.state;
    const currentCard = cards[currentIndex];

    return (
      <div className="app-container">
        <Navbar />
        
        {/* Slider */}
        <div className="slider-container">
          <button
            className={`slider-option ${matchMode === "people" ? "active" : ""}`}
            onClick={() => this.handleToggleMatchMode("people")}
          >
            Match with People
          </button>
          <button
            className={`slider-option ${matchMode === "projects" ? "active" : ""}`}
            onClick={() => this.handleToggleMatchMode("projects")}
          >
            Match with Projects
          </button>
        </div>
        
        {/* Card Wrapper */}
        <div className="card-wrapper">
          {cards.length > 0 && (
            <div
              className={`card-container ${animationDirection}`}
              onAnimationEnd={this.handleAnimationEnd}
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
                      onClick={this.handleCheck}
                    >
                      ✔
                    </button>
                    <button
                      className="x-button"
                      onClick={this.handleReject}
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
            <Button className="button-left" onClick={this.handlePrevious}>
              ←
            </Button>
            <Button className="button-right" onClick={this.handleNext}>
              →
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
