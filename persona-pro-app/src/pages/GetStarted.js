import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/GetStarted.css';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdSupportAgent, MdCode, MdPeople, MdAttachMoney, MdBuild, MdDesktopMac, MdGavel, MdDesignServices } from 'react-icons/md';

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
];

const GetStarted = () => {
  const navigate = useNavigate();
  const [newResponsibility, setNewResponsibility] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    department: '',
    responsibilities: [],
    challenge: '',
    challengeFrequency: '',
    supportNeeded: '',
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

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      fullName: '',
      jobTitle: '',
      department: '',
      responsibilities: ['', '', ''],
      challenge: '',
      challengeFrequency: '',
      supportNeeded: '',
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

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
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
            <label>Main Challenge</label>
            <input type="text" name="challenge" value={formData.challenge} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Frequency of Challenge</label>
            <select name="challengeFrequency" value={formData.challengeFrequency} onChange={handleChange}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>
          <div className="form-group">
            <label>Support Needed</label>
            <input type="text" name="supportNeeded" value={formData.supportNeeded} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Preferred Communication Style</label>
            <select name="communicationStyle" value={formData.communicationStyle} onChange={handleChange}>
              <option value="Formal">Formal</option>
              <option value="Informal">Informal</option>
              <option value="Technical">Technical</option>
              <option value="Friendly">Friendly</option>
            </select>
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
