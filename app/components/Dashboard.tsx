"use client"; // TODO: decide between client and server side rendering (if ssr, change to "@phosphor-icons/react/dist/ssr")
import { HouseIcon, UserCircleIcon, PlusCircleIcon, SquaresFourIcon, MagnifyingGlassIcon, BookmarkSimpleIcon} from "@phosphor-icons/react";
import "./Dashboard.css";
import Link from 'next/link';

 export function Dashboard() {
  return (
    <>
      <Link href="/profile" className="selection" >
        <UserCircleIcon 
          weight="fill" 
          size={32}
        />
        Profile : TODO: username
      </Link>
      <div className="selection">
        <PlusCircleIcon 
          weight="fill" 
          size={32}
        />
        Create
      </div>
      <Link href="/home" className="selection">
        <HouseIcon 
          weight="fill" 
          size={32}
        />
        Home
      </Link>
      <div className="selection">
        <SquaresFourIcon 
          weight="bold" 
          size={32}
        />
        Projects
      </div>
      <div className="selection">
        <MagnifyingGlassIcon 
          weight="bold" 
          size={32}
        />
        Community
      </div>
      <div className="selection">
        <BookmarkSimpleIcon 
          weight="bold" 
          size={32}
        />
        Collections
      </div>
    </>
  );
}