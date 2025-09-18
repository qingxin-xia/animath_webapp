"use client";
import { XIcon } from "@phosphor-icons/react";
import { LoginContent } from './LoginContent';
import './Login.css';  

interface Props { /* open/close login window */
  loginOpen: boolean;
  setLoginOpen: (loginOpen: boolean) => void;
}
export function Login({loginOpen, setLoginOpen}: Props) {
  if (loginOpen) {
    return (
      <div className = "login-container">
        <XIcon
          onClick={() => setLoginOpen(false)}
          className='close-button'
          size={32}
          weight="bold"/>
        <LoginContent />
      </div>
    );
  } else {
    setLoginOpen(false);
  }
}
