import React from "react";
import "./Card.css"; // Importing the CSS file

const Card = ({ zIndex = 0, children }) => (
  <div className="card" style={{ zIndex }}>{children}</div>
);

export default Card;