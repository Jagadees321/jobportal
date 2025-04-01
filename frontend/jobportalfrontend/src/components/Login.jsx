// components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister ? 'http://localhost:2004/api/register' : 'http://localhost:2004/api/login';
      const response = await axios.post(url, formData);
      
      if (!isRegister) {
        localStorage.setItem('user', JSON.stringify(response.data.data)); 
        setIsLoggedIn(true);
      } else {
        alert('Registration successful! Please login.');
        setIsRegister(false);
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Error: ' + (error.response?.data?.message || 'Something went wrong'));
    }
  };

  return (
    <div className="container">
      <div className="image-section"></div>
      <div className="form-section">
        {isRegister ? (
          <form onSubmit={handleSubmit} style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <h2>Create Account</h2>
            <input type="email" placeholder="Email" required 
              value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{width:'90%',margin:'5px 0px'}} />
            <input type="text" placeholder="Username" required 
              value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
              style={{width:'90%',margin:'5px 0px'}}/>
            <input type="password" placeholder="Password" required 
              value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{width:'90%',margin:'5px 0px'}} />
            <input type="tel" placeholder="Phone Number" required 
              value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{width:'90%',margin:'5px 0px'}} />
            <button type="submit" style={{padding:'5px',width:'60%',borderRadius:'10px',margin:'5px 0px'}}>Register</button>
            <div className="toggle-form">
              Already have an account? <span onClick={() => setIsRegister(false)}>Login</span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className='formfields' style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <h2>Welcome Back</h2>
            <input type="email" placeholder="Email" required 
              value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{width:'90%',margin:'5px 0px'}} />
            <input type="password" placeholder="Password" required 
              value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{width:'90%',margin:'5px 0px'}} />
            <button type="submit" style={{width:'65%',borderRadius:'20px',height:"30%",padding:'10px'}}>Login</button>
            <div className="toggle-form">
              Don't have an account? <span onClick={() => setIsRegister(true)}>Register</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
