import React from 'react';
import '../style/GetStarted.css';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-pg">
      <div className="nav-container">
        <img className="logo-home" src="/logo.png" alt="persona pro logo" />
        <h2 onClick={() => navigate('/get-started')} className="get-started">Get Started</h2>
        <h2 onClick={() => navigate('/about-us')} className="about-us">About Us</h2>
        <h2 onClick={() => navigate('/preferences')} className="preferences">Preferences</h2>
        <h2 onClick={() => navigate('/')} className="preferences">Home</h2>
        <img className="menu-home" src="/Menu.png" alt="menu button" />
      </div>

      <div className="form-container">
        <Form />
      </div>
    </div>
  );
};

export default GetStarted;
