import React from 'react';
import '../style/HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <img onClick={() => navigate('/')} className="logo-home" src="/logo.png" alt="persona pro logo"/>
      <h2 onClick={() => navigate('/get-started')} className="get-started">Get Started</h2>
      <h2 onClick={() => navigate('/about-us')} className="about-us">About Us</h2>
      <h2 onClick={() => navigate('/preferences')} className="preferences">Preferences</h2>
      <img className="menu-home" src="/Menu.png" alt="menu button"/>
      
      <div className="inner-block">
        <h1 className="title-home">PersonaPro</h1>
        <hr style={{color: '#46242D', backgroundColor: '#46242D', height: 2, borderColor : '#000000', width: 1000, marginTop: 180}}/>
        <img className="home-page-image" src="/home-page-pattern.png" alt="home page pattern"/>
      </div>
    </div>
  );
};

export default HomePage;
