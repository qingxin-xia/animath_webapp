"use client";
import { Rive, useRive, useStateMachineInput, RiveEventType, EventType } from '@rive-app/react-canvas';
import { useEffect } from "react";
import { Login } from '../loginComponent/Login';
import "./ContentOne.css";

interface Props { /* open/close login window */
  loginOpen: boolean;
  setLoginOpen: (loginOpen: boolean) => void;
}

export const RiveAnimation = () => {
  const {rive, RiveComponent} = useRive({
    src: "./rive/rubbing_face_against_window.riv",
    stateMachines: "State Machine 1",
    //shouldDisableRiveListeners: true,
    autoplay: true
  });

  const hovering = useStateMachineInput(rive, "State Machine 1", "Hovering");
/*
  const onRiveEventRecieved = (riveEvent) => {
    const eventData = riveEvent.data;
    switch (eventData.name) {
      case "OnHoverEnter":
        document.body.style.cursor = "pointer";
        break;
      case "OnHoverExit":
        document.body.style.cursor = "auto";
        break;
    }
  };

  useEffect(()=> {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventRecieved);
    }
  }, [rive]);
  */

  if (hovering === null) {
    return (
      <RiveComponent />
    )
  } else {
    return (
      <RiveComponent
        onMouseEnter={() => {
          hovering.value=true;}}
        onMouseLeave={() => {
          hovering.value=false;}} 
        />
    );
  }
}

export function ContentOne({loginOpen, setLoginOpen}: Props) {

  return (
    <div className="content">
        <div className="rubbing-face-rive">
          <RiveAnimation />
        </div>
        <div className="text">
          <p className="welcome-message">welcome to animath</p>
          <p className="description">create and discover animated math, physics, and computer science concepts</p> 
          <button
            className="get-started-button"
            onClick={() => {setLoginOpen(true)}}>
              Get Started
          </button>
        </div>
        {loginOpen && <Login loginOpen={loginOpen} setLoginOpen={setLoginOpen}/>}
      </div>
  );
}