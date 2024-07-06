import React from 'react';
import '../style/AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us-pg">
      <img onClick={() => navigate('/')} className="logo-home" src="/logo.png" alt="persona pro logo"/>
      <h2 onClick={() => navigate('/get-started')} className="get-started">Get Started</h2>
      <h2 onClick={() => navigate('/about-us')} className="about-us">About Us</h2>
      <h2 onClick={() => navigate('/preferences')} className="preferences">Preferences</h2>
      <img className="menu-home" src="/Menu.png" alt="menu button"/>

      <img className="about-us-img" src="/about-us-pattern.png" alt="about us pattern"/>
      <div className="transparent-about">
        <p className="text-about">At PersonaPro, we specialize in leveraging <strong>artificial intelligence</strong> to enhance workplace <strong>productivity</strong> by delivering <strong>customized</strong> AI interactions <strong>tailored</strong> to individual job roles. Our <strong>innovative</strong> web application ensures that employees receive contextually <strong>relevant</strong> and <strong>beneficial</strong> responses, <strong>aligned</strong> with their unique <strong>responsibilities</strong> and <strong>challenges</strong>. By integrating <strong>dynamic</strong> customization and <strong>robust</strong> feedback mechanisms, we continuously <strong>refine</strong> our algorithms to meet the <strong>evolving</strong> needs of our users. At PersonaPro, we are committed to <strong>empowering</strong> professionals with <strong>AI-driven insights</strong> that elevate <strong>efficiency</strong> and <strong>effectiveness</strong> in the corporate environment.</p>
      </div>
    </div>
  );
};

export default AboutUs;
