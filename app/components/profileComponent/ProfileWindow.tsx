"use client";
import { XIcon } from "@phosphor-icons/react";
import { ProfileWindowContent } from './ProfileWindowContent';
import './ProfileWindow.css';  

interface Props { /* open/close login window */
  profileWindowOpen: boolean;
  setProfileWindowOpen: (loginOpen: boolean) => void;
}
export function ProfileWindow({profileWindowOpen, setProfileWindowOpen}: Props) {
  if (profileWindowOpen) {
    return (
      <div className = "profile-container">
        <XIcon
          onClick={() => setProfileWindowOpen(false)}
          className='close-button'
          size={24}
          weight="bold"/>
        <ProfileWindowContent />
      </div>
    );
  } else {
    setProfileWindowOpen(false);
  }
}