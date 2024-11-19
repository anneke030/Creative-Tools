import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileMatching from './components/profileMatching';
import Explore from './components/Explore';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomePage />} />  {/* Use HomePage here */}
              <Route path="/profileMatching" element={<ProfileMatching />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/explore" element={<Explore />} />
          </Routes>
      </Router>
  );
};


export default App;