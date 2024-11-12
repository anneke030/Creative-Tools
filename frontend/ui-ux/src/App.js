import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import './App.css';
import Login from './login';
import Navbar from './Navbar';
import HomePage from './HomePage';
=======
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from './components/Profile';
>>>>>>> 0784b6b2c2ffee6e2bf28336f8eeeb12386f39d2


const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />  {/* Use HomePage here */}
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </Router>
  );
};


export default App;