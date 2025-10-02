"use client"; // TODO: decide between client and server side rendering (if ssr, change to "@phosphor-icons/react/dist/ssr")
import { useState } from "react";
import { HouseIcon, UserCircleIcon, BookOpenUserIcon, PlusCircleIcon, SquaresFourIcon, MagnifyingGlassIcon, BookmarkSimpleIcon, TrashSimpleIcon, CaretDownIcon, CaretDown} from "@phosphor-icons/react";
import Link from 'next/link';
import { ProfileWindow } from "./profileComponent/ProfileWindow"
import "./Dashboard.css";

interface Props { /* open/close login window */
  currentPage: String;
}

export function Dashboard({currentPage} : Props) {
  const [profileWindowOpen, setProfileWindowOpen] = useState(false);
  return (
    <div
      className="sidebar">


      <div 
        className={currentPage==="profile" ? "profile-current" : "profile"} 
        onClick={() => {setProfileWindowOpen(true)}}>
        <UserCircleIcon 
          weight="fill" 
          size={36}
        />
        Username
        <img 
          src="./images/icons/caret-down-solid-full.svg"
          className="down-caret"/>
      </div>


      <div className="block">
        <Link href="/home" className={currentPage==="home" ? "home" : "selection"}>
          <HouseIcon 
            weight="fill" 
            size={24}
          />
          Home
        </Link>
        <div className={currentPage==="community" ? "community" : "selection"}>
          <BookOpenUserIcon 
            weight="bold" 
            size={24}
          />
          Community
        </div>
        <div className={currentPage==="groups" ? "groups" : "selection"}>
          <SquaresFourIcon 
            weight="bold" 
            size={24}
          />
          Groups
        </div>
      </div>


      <div className="block-last">
        <div className={currentPage==="create" ? "create" : "selection"}>
          <PlusCircleIcon 
            weight="fill" 
            size={24}
          />
          Create
        </div>
        <div className={currentPage==="projects" ? "projects" : "selection"}>
          <SquaresFourIcon 
            weight="bold" 
            size={24}
          />
          Projects
        </div>
        <div className={currentPage==="collections" ? "collections" : "selection"}>
          <BookmarkSimpleIcon 
            weight="bold" 
            size={24}
          />
          Collections
        </div>
        <div className={currentPage==="trash" ? "trash" : "selection"}>
          <TrashSimpleIcon 
            weight="bold" 
            size={24}
          />
          Trash
        </div>
      </div>
      

      {profileWindowOpen && 
        <ProfileWindow 
          profileWindowOpen={profileWindowOpen} 
          setProfileWindowOpen={setProfileWindowOpen}/>}
    </div>
  );
}