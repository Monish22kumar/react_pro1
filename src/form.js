import React, { useState } from 'react';
import axios from 'axios';
import './loform.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    aadhaarNumber: '',
    pinnumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {  // Made this an async function
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3004/a/sig', formData);

      if (response.status === 201) {
        console.log('User data saved successfully!', response.data);
        // You can add any additional logic you want after successful data save
        // Like redirecting the user, showing a success message, etc.
      } else {
        console.error('Error while saving user data:', response.data);
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
      // Handle the error. Maybe show the user a notification, etc.
    }
  };

  return (
    <div className="signup-container">
     <h2 style={{ color: 'white' }}>Register Here</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
       
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          pattern="[0-9]{10}" // This pattern allows for 10-digit phone numbers
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="aadhaarNumber"
          placeholder="Aadhaar Number"
          pattern="[0-9]{12}" // Aadhaar number is 12 digits long
          value={formData.aadhaarNumber}
          onChange={handleChange}
          required
        />
         <input
          type="password"
          name="pinnumber"
          placeholder="Enter pin number "
          value={formData.pinnumber}
          pattern="[0-9]{4}"
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <div className="redirect-to-login">
      
        Already have an account? <a href="./L" style={{ color: 'yellow' }}>L</a>
      </div>
    </div>
  );
};

export default Signup;