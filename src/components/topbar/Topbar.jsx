import React from "react";
import "./topbar.scss";
import { MdEmail, MdPerson } from "react-icons/md";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logoLink">
            <img src="assets/m.png" alt="" className="logo" />
          </a>
          <div className="itemContainer">
            <MdPerson className="icon" />
            <span>+977 986 2174 882</span>
          </div>
          <div className="itemContainer">
            <MdEmail className="icon" />
            <span>kmarkosh@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
