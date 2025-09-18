"use client";
import Rive from '@rive-app/react-canvas';
import { Login } from './components/loginComponent/Login';
import { useState } from "react";
import "./page.module.css";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <header className="header">
        Landing Page Header
        <button
          onClick={() => {setLoginOpen(true)}}>
            Get Started
        </button>
      </header>
      {loginOpen && <Login loginOpen={loginOpen} setLoginOpen={setLoginOpen}/>}
    </>
  );
}
