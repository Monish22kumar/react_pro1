import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3004/a/login', formData);

      if (response.status === 200) {
        console.log('Login successful!', response.data);
        // You can add any additional logic you want after a successful login
        // Like redirecting the user, showing a success message, etc.
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 style={{ color: 'white' }}>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="redirect-to-signup">
        Don't have an account? <a href="./signup" style={{ color: 'yellow' }}>Sign up here</a>
      </div>
    </div>
  );
};

export default Login;
