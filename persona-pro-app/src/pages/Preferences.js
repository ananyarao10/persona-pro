import React from 'react';
import '../style/Preferences.css';
import { useNavigate } from 'react-router-dom';

const Preferences = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <img onClick={() => navigate('/')} className="logo-home" src="/logo.png" alt="persona pro logo"/>
      <h2 onClick={() => navigate('/get-started')} className="get-started">Get Started</h2>
      <h2 onClick={() => navigate('/about-us')} className="about-us">About Us</h2>
      <h2 onClick={() => navigate('/preferences')} className="preferences">Preferences</h2>
      <img className="menu-home" src="/Menu.png" alt="menu button"/>
    </div>
  );
};

export default Preferences;
