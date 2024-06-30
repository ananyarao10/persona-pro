import React, { useState } from 'react';
import '../style/Form.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    responsibilities: '',
    challenges: '',
    communicationStyle: '',
    industryKnowledge: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your logic to handle form submission
    setFormData({
      responsibilities: '',
      challenges: '',
      communicationStyle: '',
      industryKnowledge: '',
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Job Role Details</h2>
        <div className="form-group">
          <label htmlFor="responsibilities">Responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="challenges">Challenges</label>
          <textarea
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="communicationStyle">Preferred Communication Style</label>
          <input
            type="text"
            id="communicationStyle"
            name="communicationStyle"
            value={formData.communicationStyle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="industryKnowledge">Industry-Specific Knowledge</label>
          <textarea
            id="industryKnowledge"
            name="industryKnowledge"
            value={formData.industryKnowledge}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
