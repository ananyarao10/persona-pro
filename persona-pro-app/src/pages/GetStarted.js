import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/GetStarted.css';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdMoreHoriz, MdSupportAgent, MdCode, MdPeople, MdAttachMoney, MdBuild, MdDesktopMac, MdGavel, MdDesignServices } from 'react-icons/md';

const departments = [
  { name: 'Customer Support', icon: <MdSupportAgent size={50} /> },
  { name: 'Software Development', icon: <MdCode size={50} /> },
  { name: 'Marketing', icon: <MdSupportAgent size={50} /> },
  { name: 'Human Resources', icon: <MdPeople size={50} /> },
  { name: 'Sales', icon: <FaMoneyBillTrendUp size={50} /> },
  { name: 'Finance', icon: <MdAttachMoney size={50} /> },
  { name: 'Operations', icon: <MdBuild size={50} /> },
  { name: 'IT', icon: <MdDesktopMac size={50} /> },
  { name: 'Legal', icon: <MdGavel size={50} /> },
  { name: 'Design', icon: <MdDesignServices size={50} /> },
  { name: 'Other', icon: <MdMoreHoriz size={50} /> },
];

const GetStarted = () => {
  const navigate = useNavigate();
  const [newResponsibility, setNewResponsibility] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    department: '',
    responsibilities: [],
    challenges: [
      { name: '', frequency: '' },
      { name: '', frequency: '' },
      { name: '', frequency: '' },
    ],
    supportNeeded: 5,
    communicationStyle: '',
    responseDetail: '',
    industryKnowledge: '',
    industryRegulations: '',
    tools: '',
    challengingTool: '',
    goals: '',
    skillsNeeded: '',
    feedbackGiving: '',
    feedbackReceiving: '',
    helpfulFeedback: ''
  });

  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter((value) => value !== '').length;
    return Math.floor((filledFields / totalFields) * 100);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddResponsibility = () => {
    if (newResponsibility.trim() !== '') {
      setFormData((prevData) => ({
        ...prevData,
        responsibilities: [...prevData.responsibilities, newResponsibility],
      }));
      setNewResponsibility('');
    }
  };

  const handleRemoveResponsibility = (index) => {
    const updatedResponsibilities = formData.responsibilities.filter((_, idx) => idx !== index);
    setFormData((prevData) => ({
      ...prevData,
      responsibilities: updatedResponsibilities,
    }));
  };

  const handleDepartmentSelect = (department) => {
    setFormData((prevData) => ({
      ...prevData,
      department,
    }));
  };

  const handleChallengeChange = (index, fieldName, value) => {
    const newChallenges = [...formData.challenges];
    newChallenges[index][fieldName] = value;
    setFormData((prevData) => ({
      ...prevData,
      challenges: newChallenges,
    }));
  };

  const handleSupportNeededChange = (event) => {
    setFormData({ ...formData, supportNeeded: parseInt(event.target.value) });
  };

  const handleCommunicationStyleSelect = (style) => {
    setFormData({ ...formData, communicationStyle: style });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      fullName: '',
      jobTitle: '',
      department: '',
      responsibilities: [],
      challenges: [
        { name: '', frequency: '' },
        { name: '', frequency: '' },
        { name: '', frequency: '' },
      ],
      supportNeeded: 5,
      communicationStyle: '',
      responseDetail: '',
      industryKnowledge: '',
      industryRegulations: '',
      tools: '',
      challengingTool: '',
      goals: '',
      skillsNeeded: '',
      feedbackGiving: '',
      feedbackReceiving: '',
      helpfulFeedback: ''
    });
  };

  const communicationStyles = ['Formal', 'Informal', 'Technical', 'Friendly', 'Direct', 'Assertive', 'Passive'];

  const challengeOptions = [
    'Managing Workload',
    'Adapting to Change',
    'Improving Communication',
    'Handling Client Expectations',
    'Team Collaboration',
    'Learning New Technologies',
    'Other'
  ];

  const progress = calculateProgress();

  return (
    <div className="get-started-pg">
      <img className="logo-home" src="/logo.png" alt="persona pro logo"/>
      <h2 onClick={() => navigate('/get-started')} className="get-started">Get Started</h2>
      <h2 onClick={() => navigate('/about-us')} className="about-us">About Us</h2>
      <h2 onClick={() => navigate('/preferences')} className="preferences">Preferences</h2>
      <img className="menu-home" src="/Menu.png" alt="menu button"/>

      <div className="form-setup">
        <form className="form" onSubmit={handleSubmit}>
          <div className='center-text'>
            <h1 className='form-title'>Persona Pro Questionnaire</h1>
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress}% Complete
            </div>
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input placeholder="First and last" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Department</label>
            <div className="icon-container">
              {departments.map((dept) => (
                <div
                  key={dept.name}
                  className={`icon ${formData.department === dept.name ? 'selected' : ''}`}
                  onClick={() => handleDepartmentSelect(dept.name)}
                >
                  <div className="icon-wrapper">
                    {dept.icon}
                    <span className="icon-name">{dept.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Responsibilities</label>
            <div className="responsibilities-list">
              {formData.responsibilities.map((responsibility, index) => (
                <div key={index} className="responsibility-item">
                  <span>{responsibility}</span>
                  <button type="button" onClick={() => handleRemoveResponsibility(index)}>X</button>
                </div>
              ))}
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Add Responsibility"
                value={newResponsibility}
                onChange={(e) => setNewResponsibility(e.target.value)}
              />
              <button type="button" onClick={handleAddResponsibility}>Add</button>
            </div>
          </div>

          <div className="form-group">
            <label>Main Challenges</label>
            {formData.challenges.map((challenge, index) => (
              <div key={index}>
                <select
                  value={challenge.name}
                  onChange={(e) => handleChallengeChange(index, 'name', e.target.value)}
                >
                  <option value="">Select main challenge...</option>
                  {challengeOptions.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
                {challenge.name === 'Other' && (
                  <input
                    type="text"
                    value={challenge.name}
                    onChange={(e) => handleChallengeChange(index, 'name', e.target.value)}
                    placeholder="Specify other challenge"
                  />
                )}
                <select value={challenge.frequency} onChange={(e) => handleChallengeChange(index, 'frequency', e.target.value)}>
                  <option value="">Select frequency...</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      const updatedChallenges = [...formData.challenges];
                      updatedChallenges.splice(index, 1);
                      setFormData((prevData) => ({
                        ...prevData,
                        challenges: updatedChallenges,
                      }));
                    }}>Remove</button>
                )}
              </div>
            ))}
            {formData.challenges.length < 3 && (
              <button
                type="button"
                onClick={() => {
                  setFormData((prevData) => ({
                    ...prevData,
                    challenges: [...prevData.challenges, { name: '', frequency: '' }],
                  }));
                }}
              >
                Add Challenge
              </button>
            )}
          </div>

          <div className="form-group">
            <label>Support Needed</label>
            <p className="support-description">
              How much support do you need in your role? This scale represents the level of
              assistance or resources you require.
            </p>
            <input
              type="range"
              min="1"
              max="10"
              value={formData.supportNeeded}
              onChange={handleSupportNeededChange}
              className="slider"
              id="supportRange"
            />
            <div className="slider-values">
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className={formData.supportNeeded === index + 1 ? 'selected' : ''}
                  style={{ fontWeight: formData.supportNeeded === index + 1 ? 'bold' : 'normal' }}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Communication Style</label>
            <div className="communication-styles">
              {communicationStyles.map((style, index) => (
                <button
                  key={index}
                  type="button"
                  className={`communication-style-button ${formData.communicationStyle === style ? 'selected' : ''}`}
                  onClick={() => handleCommunicationStyleSelect(style)}>{style}</button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Preferred Response Detail</label>
            <select name="responseDetail" value={formData.responseDetail} onChange={handleChange}>
              <option value="Detailed">Detailed</option>
              <option value="Brief">Brief</option>
              <option value="Step-by-step">Step-by-step</option>
              <option value="Overview">Overview</option>
            </select>
          </div>
          <div className="form-group">
            <label>Industry-Specific Knowledge</label>
            <input type="text" name="industryKnowledge" value={formData.industryKnowledge} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Industry-Specific Regulations</label>
            <input type="text" name="industryRegulations" value={formData.industryRegulations} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tools and Software</label>
            <input type="text" name="tools" value={formData.tools} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Challenging Tool</label>
            <input type="text" name="challengingTool" value={formData.challengingTool} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Goals and Objectives</label>
            <input type="text" name="goals" value={formData.goals} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Skills Needed</label>
            <input type="text" name="skillsNeeded" value={formData.skillsNeeded} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Preferred Method to Give Feedback</label>
            <select name="feedbackGiving" value={formData.feedbackGiving} onChange={handleChange}>
              <option value="In-person">In-person</option>
              <option value="Email">Email</option>
              <option value="Surveys">Surveys</option>
              <option value="Meetings">Meetings</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Method to Receive Feedback</label>
            <select name="feedbackReceiving" value={formData.feedbackReceiving} onChange={handleChange}>
              <option value="In-person">In-person</option>
              <option value="Email">Email</option>
              <option value="Surveys">Surveys</option>
              <option value="Meetings">Meetings</option>
            </select>
          </div>
          <div className="form-group">
            <label>Most Helpful Type of Feedback</label>
            <input type="text" name="helpfulFeedback" value={formData.helpfulFeedback} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
