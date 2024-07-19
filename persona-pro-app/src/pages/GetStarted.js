import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/GetStarted.css';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdMoreHoriz, MdSupportAgent, MdCode, MdPeople, MdAttachMoney, MdSchool, MdDesktopMac, MdGavel, MdDesignServices } from 'react-icons/md';
import { assignRoles } from '../components/assignRole.js';
import RoleModal from '../pages/RoleModal.js';

const departments = [
  { name: 'Customer Support', icon: <MdSupportAgent size={50} /> },
  { name: 'Software Development', icon: <MdCode size={50} /> },
  { name: 'Marketing', icon: <MdSupportAgent size={50} /> },
  { name: 'Human Resources', icon: <MdPeople size={50} /> },
  { name: 'Sales', icon: <FaMoneyBillTrendUp size={50} /> },
  { name: 'Finance', icon: <MdAttachMoney size={50} /> },
  { name: 'Student', icon: <MdSchool size={50} /> },
  { name: 'IT', icon: <MdDesktopMac size={50} /> },
  { name: 'Legal', icon: <MdGavel size={50} /> },
  { name: 'Design', icon: <MdDesignServices size={50} /> },
  { name: 'Scientist', icon: <MdDesignServices size={50} /> },
  { name: 'Education', icon: <MdDesignServices size={50} /> },
  { name: 'Other', icon: <MdMoreHoriz size={50} /> },
];

const GetStarted = () => {
  const navigate = useNavigate();
  const [newTool, setNewTool] = useState('');
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
    tools: [],
    feedbackGiving: '',
    feedbackReceiving: '',
    additionalInfo: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [topRoles, setTopRoles] = useState([]);

  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter((value) => value !== '').length;
    return Math.floor((filledFields / totalFields) * 100);
  };

  const handleAddTool = () => {
    if (newTool.trim() !== '') {
      setFormData((prevData) => ({
        ...prevData,
        tools: [...prevData.tools, newTool],
      }));
      setNewTool('');
    }
  };

  const handleRemoveTool = (index) => {
    setFormData((prevData) => {
      const updatedTools = [...prevData.tools];
      updatedTools.splice(index, 1);
      return {
        ...prevData,
        tools: updatedTools,
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTool();
    }
  };

  const handleAddResponsibility = () => {
    if (newResponsibility.trim() !== '') {
      setFormData((prevData) => ({
        ...prevData,
        responsibilities: [...prevData.responsibilities, newResponsibility.trim()],
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

  const handleResponsibilityKeyDown = (event) => {
    if (event.key === 'Enter' && newResponsibility.trim()) {
      event.preventDefault();
      handleAddResponsibility();
    }
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

    const topRoles = assignRoles(formData);

    setTopRoles(topRoles);
    setModalIsOpen(true);

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
      tools: [],
      feedbackGiving: '',
      feedbackReceiving: '',
      additionalInfo: '',
    });
  };

  const communicationStyles = ['Formal', 'Informal', 'Technical', 'Friendly', 'Direct', 'Assertive', 'Passive'];

  const challengeOptions = ['Managing Workload','Adapting to Change','Improving Communication','Handling Client Expectations','Team Collaboration','Learning New Technologies','Other'];

  const progress = calculateProgress();

  return (
    <div className="get-started-pg">
      <img onClick={() => navigate('/')} className="logo-home" src="/logo.png" alt="persona pro logo"/>
      <h2 onClick={() => navigate('/get-started')} className="get-started">Get Started</h2>
      <h2 onClick={() => navigate('/about-us')} className="about-us">About Us</h2>
      <h2 onClick={() => navigate('/preferences')} className="preferences">Preferences</h2>
      <img className="menu-home" src="/Menu.png" alt="menu button"/>

      <div className="form-setup">
        <form className="form" onSubmit={handleSubmit}>
          <div className='center-text'>
            <h1 className='form-title'>Persona Pro Questionnaire</h1>
          </div>

          <p style={{textAlign:'center'}} className="support-description">
          Completing this form allows us to understand your professional profile comprehensively, enabling us to tailor support and resources that align with your responsibilities, challenges, and goals. Your input helps us personalize AI applications according to your role, ensuring tailored support and efficient task management.</p>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress}% Complete
            </div>
          </div>

          <div className='form-row'>
            <div className="form-group-row">
              <label>Full Name</label>
              <input placeholder="First and Last" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>

            <div className="form-group-row">
              <label>Job Title</label>
              <input placeholder="Job Title" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
            </div>
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

          <div className='form-row'>
            <div className="form-group-row">
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
                  placeholder="Type and press Enter to add a responsibility"
                  value={newResponsibility}
                  onChange={(e) => setNewResponsibility(e.target.value)}
                  onKeyDown={handleResponsibilityKeyDown}
                />
              </div>
            </div>
            <div className="form-group-row">
              <label>Tools and Software</label>
              <div className="tools-list">
                {formData.tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <span>{tool}</span>
                    <button type="button" onClick={() => handleRemoveTool(index)}>X</button>
                  </div>
                ))}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Type and press Enter to add a tool"
                  value={newTool}
                  onChange={(e) => setNewTool(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Main Challenges</label>
            <p className="support-description">
            Outline key challenges you face in your role, highlighting their impact and frequency, to provide insights into areas where additional support may be beneficial.</p>
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
            <p className="support-description">
            Select your preferred communication style that best reflects how you interact and convey information within professional settings.</p>
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

          <div className="form-row">
            <div className="form-group-row">
              <label>Preferred Response Detail</label>
              <select name="responseDetail" value={formData.responseDetail} onChange={handleChange}>
                <option value="Detailed">Detailed</option>
                <option value="Brief">Brief</option>
                <option value="Step-by-step">Step-by-step</option>
                <option value="Overview">Overview</option>
              </select>
            </div>

            <div className="form-group-row">
              <label>Industry-Specific Knowledge</label>
              <p className="form-helper-text">Please provide details relevant to your industry expertise.</p>
              <textarea
                name="industryKnowledge"
                value={formData.industryKnowledge}
                onChange={handleChange}
                rows={4}
                placeholder="Please describe your industry specific knowledge related to your role here."
              />
            </div>
          </div>

          <div className='form-row'>
            <div className="form-group-row">
              <label>Preferred Method to Give Feedback</label>
              <select name="feedbackGiving" value={formData.feedbackGiving} onChange={handleChange}>
                <option value="In-person">In-person</option>
                <option value="Email">Email</option>
                <option value="Surveys">Surveys</option>
                <option value="Meetings">Meetings</option>
              </select>
            </div>
            <div className="form-group-row">
              <label>Preferred Method to Receive Feedback</label>
              <select name="feedbackReceiving" value={formData.feedbackReceiving} onChange={handleChange}>
                <option value="In-person">In-person</option>
                <option value="Email">Email</option>
                <option value="Surveys">Surveys</option>
                <option value="Meetings">Meetings</option>
              </select>
            </div>
          </div>

          <div className="form-group">
              <label>Additional Info</label>
              <input placeholder="Please add any other details or concerns you feel are relevant to your use of AI for your role" type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
            </div>
      
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
