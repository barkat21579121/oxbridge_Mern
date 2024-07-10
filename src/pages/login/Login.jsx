import React, { useState } from 'react';
import './Login.css';
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri';
import lock from "./file.png"
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log('Logging in with:', formData);
    // Here you can add your login logic, e.g., API calls, etc.
  };

  return (
    <div className='loginMainDiv'>
      <div className='loginDiv'>
        <form>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <img src={lock} alt='lock' width={"180px"}/>
          </div>
          <input
            name='email'
            placeholder='Email'
            type='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className='password-input'>
            <input
              name='password'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='password-toggle-btn'
            >
              {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
            </button>
          </div>
          <button className='loginBtn' type='button' onClick={handleLogin}>
            Login
          </button>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            color :"white",
            textDecoration:"none"
          }}> don't have an account yet ? 
           <Link to={"/signUp"} style={{
            color:"red",

textDecoration:"none"          }}> SignUp</Link> </div>
       
        </form>
      </div>
    </div>
  );
};

export default Login;
