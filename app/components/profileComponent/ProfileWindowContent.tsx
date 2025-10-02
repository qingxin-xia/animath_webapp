"use client";
import Link from 'next/link';
import { UserCircleIcon, GearSixIcon, FadersHorizontalIcon, SignOutIcon } from "@phosphor-icons/react";
import "./ProfileWindowContent.css";

export function ProfileWindowContent() {
  return (
    <>
      <UserCircleIcon
        className="profile-info-picture"
        size={52}
        weight="light"/>
      <Link href="/profile" className="profile-info-username">Username</Link>
      <p className="profile-info-email">email</p>
      <p className='divider'></p>


      <p className="option">
        <GearSixIcon
          size={20}
          weight="bold"/>
        Settings</p>

      <Link href="/profile" className="option">
        <FadersHorizontalIcon
          size={20}
          weight="bold"/>
        Manage account</Link>

      <p className='divider'></p>

      <p className="option">
        <SignOutIcon
          size={20}
          weight="bold"/>
        Sign out</p>
    </>
  );
}