"use client";
import Rive from '@rive-app/react-canvas';
import { LandingPageHeader } from "./components/landingPage/LandingPageHeader";
import { ContentOne } from "./components/landingPage/ContentOne";
import { useState } from "react";
import styles from "./page.module.css";

export const Simple = () => (
  <Rive
    src="https://cdn.rive.app/animations/vehicles.riv"
  />
);

export default function LandingPage() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <div className={loginOpen ? styles.contentLogin : styles.content}>
        <LandingPageHeader />
          <ContentOne 
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}/>
          <ContentOne 
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}/>
      </div>
    </>
  );
}
