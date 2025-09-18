"use client";
import { GoogleLogoIcon, EyeIcon, EyeClosedIcon } from "@phosphor-icons/react";
import { useState } from 'react';
import './LoginContent.css';

export function LoginContent() {
  const [login, setLogin] = useState(true); // determine if login or signup is active
  const [showPassword, setShowPassword] = useState(false); // determine if password is visible or not

  return (
    <>
      <button className="login-via-google-button">
            login via Google
            <GoogleLogoIcon 
              size={32} 
              weight="bold"/>
        </button>
        <br />
        <p className='divider'></p>

  
        <div className="login-signup-toggle-container">
          <button 
            className={login ? 'login-toggle' : 'login-toggle-off'}
            onClick={() => setLogin(true)}>
              login
          </button>
          <button 
            className={login ? 'signup-toggle-off' : 'signup-toggle'}
            onClick={() => setLogin(false)}>
              sign-up
          </button>
          <br />
        </div>

  
        <input 
          className={login ? 'email-input-login' : 'email-input-signup'}
          width="150" 
          placeholder="email or username">
        </input>
        <br />
        <div 
          className="password-input-container">
          <input 
            className="password-input"
            type={showPassword ? "text" : "password"}
            width="150" 
            placeholder="password">
          </input>
          {showPassword 
            ? <EyeIcon
                onClick={() => setShowPassword(false)}
                size={28}
                weight='bold'/>
            : <EyeClosedIcon
                onClick={() => setShowPassword(true)}
                size={28}
                weight="bold"/>}
        </div>

  
        {login ? 
          <button className='submit-button'>
            <span>Login </span>
            </button> 
          : <button className="submit-button" >
            <span>Sign Up </span>
            </button>
        }
        <br />
        <a className="forgot-password-link" href="../">Forgot Password?</a>
        {/* TODO: make the forgot password setup */}
    </>
  );
}