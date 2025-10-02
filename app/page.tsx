"use client";
import Rive from '@rive-app/react-canvas';
import { LandingPageHeader } from "./components/landingPage/LandingPageHeader";
import { ContentOne } from "./components/landingPage/ContentOne";
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";

export default function LandingPage() {
  const [loginOpen, setLoginOpen] = useState(false);
  // TODO: find scrollHeight everytime an element comes into view
  const windowRef = useRef(null);
  useEffect(() => {
    const containerElem = windowRef.current;
    if (containerElem) {
      console.log('windowRef', containerElem);
    }
  }, );

  return (
    <>
      <div 
        className={loginOpen ? styles.contentLogin : styles.content}
        ref={windowRef}>
        <LandingPageHeader />
          <ContentOne 
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}/>
      </div>
    </>
  );
}
