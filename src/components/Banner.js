import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://user-media-prod-cdn.itsre-sumo.mozilla.net/uploads/images/2019-12-18-16-34-37-c81e72.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">Description</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
