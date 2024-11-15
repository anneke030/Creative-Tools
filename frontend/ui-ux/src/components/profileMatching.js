import React, { Component } from "react";
import Swipeable from "react-swipy";
import Swiper from "../utils/swiper";
import Card from "./Card";
import Button from "./Button";
import "../App.css"; // Importing the CSS file

class App extends Component {
  // Hardcoded profiles of designers
  state = {
    cards: [
      { name: "Sophie Williams", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/5.jpg" },
      { name: "Michael Green", role: "Graphic Designer", image: "https://randomuser.me/api/portraits/men/7.jpg" },
      { name: "Laura James", role: "Product Designer", image: "https://randomuser.me/api/portraits/women/8.jpg" },
      { name: "Chris Howard", role: "Web Designer", image: "https://randomuser.me/api/portraits/men/9.jpg" }
    ]
  };

  remove = () => this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div className="app-container">
        <div className="card-wrapper">
          {cards.length > 0 && (
            <div className="card-wrapper">
              <Swipeable
                buttons={({ right, left }) => {
                  const swipeFunction = { right, left };
                  Swiper.initializeSwiper(swipeFunction);
                  return (
                    <div className="actions-container">
                      <Button
                        id="SWIPELEFT"
                        className="button-left"
                        onClick={Swiper.swipeLeft}
                      >
                        ←
                      </Button>
                      <Button
                        id="SWIPERIGHT"
                        className="button-right"
                        onClick={Swiper.swipeRight}
                      >
                        →
                      </Button>
                    </div>
                  );
                }}
                onAfterSwipe={this.remove}
              >
                <Card>
                  <div className="card-content">
                    <img
                      src={cards[0].image}
                      alt={cards[0].name}
                      className="profile-image"
                    />
                    <h3>{cards[0].name}</h3>
                    <p>{cards[0].role}</p>
                  </div>
                </Card>
              </Swipeable>
              {cards.length > 1 && (
                <Card zIndex={-1}>
                  <div className="card-content">
                    <img
                      src={cards[1].image}
                      alt={cards[1].name}
                      className="profile-image"
                    />
                    <h3>{cards[1].name}</h3>
                    <p>{cards[1].role}</p>
                  </div>
                </Card>
              )}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>No more profiles</Card>}
        </div>
      </div>
    );
  }
}

export default App;