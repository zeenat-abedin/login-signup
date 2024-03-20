import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
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
    // Implement login logic here, e.g., sending data to backend API
    // Upon successful login, call handleLogin with user data and redirect to protected page
    const userData = { id: 1, username: formData.username }; // Dummy user data
    handleLogin(userData);
    navigate('/protected');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
