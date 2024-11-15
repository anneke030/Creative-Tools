import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileMatching from './components/profileMatching';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />  {/* Use HomePage here */}
              <Route path="/profileMatching" element={<ProfileMatching />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </Router>
  );
};


export default App;