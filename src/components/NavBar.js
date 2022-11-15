import React from "react";
import "../styles/NavBar.css";
import NetflixLogo from "../assets/netflix.png";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <img className="nav__logo" src={NetflixLogo} alt="netflix_logo" />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
