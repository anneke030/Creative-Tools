import React, { useState } from 'react';
import './Explore.css';

const App = () => {
  const [content, setContent] = useState('');

  const handleButtonClick = (text) => {
    setContent(text);
  };

  return (
    <div className="app">
      <div className="button-container">
        <button
          className="custom-button"
          onClick={() => handleButtonClick('Content for Button 1')}
        >
          Button 1
        </button>
        <button
          className="custom-button"
          onClick={() => handleButtonClick('Content for Button 2')}
        >
          Button 2
        </button>
        <button
          className="custom-button"
          onClick={() => handleButtonClick('Content for Button 3')}
        >
          Button 3
        </button>
      </div>
      <div className="content">
        {content && <p>{content}</p>}
      </div>
    </div>
  );
};

export default App;