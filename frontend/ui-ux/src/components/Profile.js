import React, { useState } from 'react';
import Profile_Navbar from './Profile_Navbar';
import './Profile.css';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [occupation, setOccupation] = useState('');
  const [projects, setProjects] = useState('');

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-image-container">
        <label htmlFor="profile-image-upload">
          <img
            src={profileImage || 'https://via.placeholder.com/100'} // Default or uploaded image
            alt="Profile"
            className="profile-image"
          />
        </label>
        <input
          id="profile-image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>

      <div className="profile-details">
        <div className="profile-field">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="profile-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="profile-field">
          <label>Education Level:</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter your education level"
          />
        </div>
        <div className="profile-field">
          <label>Occupation:</label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="Enter your occupation"
          />
        </div>
        <div className="profile-field">
          <label>Current Projects:</label>
          <textarea
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
            placeholder="Describe your current projects"
          />
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <Profile_Navbar />
      <ProfilePage /> {/* Renders ProfilePage component */}
    </div>
  );
};

export default Profile;
