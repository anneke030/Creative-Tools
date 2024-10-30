import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Login from './login';



/*function App() {
  return (
    <div>
      <Login />
      
    </div>
  );
}

function HomePage() {
  return(
    <div>
      <Navbar />
      <HomePage />
    </div>
  )
}*/

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />  {/* Use HomePage here */}
          </Routes>
      </Router>
  );
};


export default App;