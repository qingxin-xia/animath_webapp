"use client";
import { useState } from 'react';
import { HeartStraightIcon } from "@phosphor-icons/react";
import "./PostPreview.css";

export function PostPreview(){
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  function like() {
    if (liked) {
      setLikesCount(likesCount-1);
      setLiked(false);
    } else {
      setLikesCount(likesCount+1);
      setLiked(true);
    }
  }

  return (
    <div
      className="content">
      <img 
        src="./images/logos/logoLight.svg" 
        className="preview-image"/>
      <div
        className="description">
        <img 
          src="./images/icons/user-bold.svg" 
          className="profile-picture"/>
        <p 
          className="username">
          {/*TODO: make the username clickable to go to a person's profile*/}
          <span>Username |</span>
          Title
        </p>
        <img
          className="heart-image"
          onClick={like} 
          src={liked ? "./images/icons/heart-liked.svg" : "./images/icons/heart-unliked.svg"}/>
        <p className="likes-count">{likesCount}</p>
      </div>
    </div>
  );
}