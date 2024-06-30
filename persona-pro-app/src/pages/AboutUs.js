import React from 'react';
import '../style/AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us-pg">
      <img className="logo-home" src="/logo.png" alt="persona pro logo"/>
      <h2 onClick={() => navigate('/get-started')} className="get-started">Get Started</h2>
      <h2 onClick={() => navigate('/about-us')} className="about-us">About Us</h2>
      <h2 onClick={() => navigate('/preferences')} className="preferences">Preferences</h2>
      <h2 onClick={() => navigate('/')} className="preferences">Home</h2>
      <img className="menu-home" src="/Menu.png" alt="menu button"/>
      <img className="about-us-img" src="/about-us-pattern.png" alt="about us pattern"/>
      <div className="transparent-about">
        <p className="text-about">At PersonaPro, we specialize in leveraging artificial intelligence to enhance workplace productivity by delivering customized AI interactions tailored to individual job roles. Our innovative web application ensures that employees receive contextually relevant and beneficial responses, aligned with their unique responsibilities and challenges. By integrating dynamic customization and robust feedback mechanisms, we continuously refine our algorithms to meet the evolving needs of our users. At PersonaPro, we are committed to empowering professionals with AI-driven insights that elevate efficiency and effectiveness in the corporate environment.</p>
      </div>
    </div>
  );
};

export default AboutUs;
