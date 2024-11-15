import React from "react";
import "./Button.css"; // Importing the CSS file

const Button = ({ children, onClick, className, id }) => (
  <button className={`button ${className}`} onClick={onClick} id={id}>
    {children}
  </button>
);

export default Button;