import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Navbar from "./Navbar"; // Import the correct Navbar path
import Card from "./Card";
import "../App.css"; // Importing the CSS file

const App = () => {
  // State for cards
  const [cards, setCards] = useState([
    { name: "Sophie Williams", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { name: "Michael Green", role: "Graphic Designer", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { name: "Laura James", role: "Product Designer", image: "https://randomuser.me/api/portraits/women/8.jpg" },
    { name: "Chris Howard", role: "Web Designer", image: "https://randomuser.me/api/portraits/men/9.jpg" },
  ]);

  // Remove the first card
  const remove = () => {
    setCards((prevCards) => prevCards.slice(1));
  };

  // UseSwipeable handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: remove,
    onSwipedRight: remove,
    preventScrollOnSwipe: true,
    trackMouse: true, // Enables mouse swiping for testing
  });

  return (
    <div className="app-container">
      <Navbar /> {/* Navbar at the top */}
      
      <div className="card-wrapper">
        {cards.length > 0 ? (
          <div {...swipeHandlers} className="swipeable-container">
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
          </div>
        ) : (
          <Card zIndex={-2}>
            <div>No more profiles</div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default App;