import React, { Component } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Button from "./Button";
import "../App.css";

class App extends Component {
  state = {
    cards: [
      { name: "Sophie Williams", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/5.jpg" },
      { name: "Michael Green", role: "Graphic Designer", image: "https://randomuser.me/api/portraits/men/7.jpg" },
      { name: "Laura James", role: "Product Designer", image: "https://randomuser.me/api/portraits/women/8.jpg" },
      { name: "Chris Howard", role: "Web Designer", image: "https://randomuser.me/api/portraits/men/9.jpg" }
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
