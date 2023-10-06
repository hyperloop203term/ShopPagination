import React, { Component } from "react";
import styles from "./styles.css";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div className="foot_back">
      {/* 왜 줄바꿈이 될까?*/}
      <div className="foot_center">
        <div>
          <img className="foot_pi round_img" src="./Twitter.jpg" alt="Twitter" />
          <img className="foot_pi round_img" src="./facebook.jpg" alt="facebook" />
          <img className="foot_pi" src="./instargram.jpg" alt="instargram" />
        </div>

        <div>
          <h6>
            Info
            <span> | </span>
            Support
            <span> | </span>
            Marking
          </h6>
        </div>

        <h6 class="foot_color">&copy; {thisYear()} 오늘의 민족</h6>
      </div>
    </div>
  );
};

export default Footer;
