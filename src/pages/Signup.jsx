import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });
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
    <div className='signup-form'>
      <form onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        <div className='container'>
          <label htmlFor="username">Name</label>
          <input type="text" name="username" placeholder="Enter" value={formData.username} onChange={handleChange} />
        </div>
        <div className='container'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className='container'>        
          <label htmlFor="password">Password</label>
          <input
          type="password"
          name="password"
          placeholder="Enter"
          value={formData.password}
          onChange={handleChange}
          />
        </div>
        <button type="submit" className='create-btn'>Create Account</button>
      </form>
      <div style={{ marginTop: '10px' }}>
         <p>Have an Account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
