import React from 'react';
import swe from '/Users/ananyarao/personal-website/my-website/src/swe.webp';
import hiking from '/Users/ananyarao/personal-website/my-website/src/hiking.jpg';
import data from '/Users/ananyarao/personal-website/my-website/src/data.jpeg';
import running from '/Users/ananyarao/personal-website/my-website/src/running.jpeg';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="grid-container">
        <div className="grid-item large">
        <img src={swe} alt="Description 1" />
        </div>
        <div className="grid-item">
          <img src={hiking} alt="Description 2" />
        </div>
        <div className="grid-item">
          <img src={data} alt="Description 3" />
        </div>
        <div className="grid-item">
          <img src={running} alt="Description 4" />
        </div>
        <div className="grid-item">
          <img src={hiking} alt="Description 5" />
        </div>
        <div className="grid-item">
          <img src={hiking} alt="Description 6" />
        </div>
        <div className="grid-item">
          <img src={hiking} alt="Description 7" />
        </div>
        <div className="grid-item">
          <img src={hiking} alt="Description 8" />
        </div>
        <div className="grid-item">
          <img src={hiking} alt="Description 9" />
        </div>
      </div>
      <div className="navigation">
        <div className="nav-item">Ananya Rao</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Contact</div>
      </div>
    </div>
  );
};

export default HomePage;
