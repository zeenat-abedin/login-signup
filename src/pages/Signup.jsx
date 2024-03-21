import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here, e.g., sending data to backend API
    // Upon successful signup, call handleLogin with user data and redirect to protected page
    const userData = { id: 1, username: formData.username }; // Dummy user data
    handleLogin(userData);
    navigate('/protected');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        <input type="text" name="username" placeholder="Enter" value={formData.username} onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
