import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from './components/Profile';



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
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </Router>
  );
};


export default App;