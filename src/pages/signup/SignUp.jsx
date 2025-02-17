import React, { useState } from 'react';
import './signup.css';
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri';
import lock from "./file.png"
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    Name:""
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

  };

  return (
    <div className='loginMainDiv'>
      <div className='loginDiv'>
        <form>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <img src={lock} alt='lock' width={"180px"}/>
          </div>
          <input
            name='Name'
            placeholder='Name'
            type='Name'
            value={formData.Name}
            onChange={handleInputChange}
          />
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
              {showPassword ? <RiEyeCloseFill style={{
                color:"white"
              }}/> : <RiEyeFill style={{
                color:"white"
              }}/>}
            </button>
          </div>
          <button className='loginBtn' type='button' onClick={handleLogin}>
            SignUp
          </button>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            color :"white",
            textDecoration:"none"
          }}> Already have an account  ? 
           <Link to={"/login"} style={{
            color:"red",

textDecoration:"none"          }}> Login </Link> </div>
       
        </form>
      </div>
    </div>
  );
};

export default SignUp;
