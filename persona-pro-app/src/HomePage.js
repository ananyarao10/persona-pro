import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <img className="logo-home" src="/logo.png" />
      <h2 className="get-started">Get Started</h2>
      <h2 className="about-us">About Us</h2>
      <h2 className="preferences">Preferences</h2>
      <img className="menu-home" src="/Menu.png" />
      <div className="inner-block">
        <h1 className="title-home">PersonaPro</h1>
        <hr style={{color: '#46242D', backgroundColor: '#46242D', height: 2, borderColor : '#000000', width: 1000, marginTop: 180}}/>
        <img className="home-page-image" src="/home-page-pattern.png" />
      </div>
    </div>
  );
};

export default HomePage;
