import React from "react";
import "./Menu.css";
import { FaTasks } from "react-icons/fa";

import { FaMedal } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
function Menu() {
  return (
    <div className="mymenu">
    <menu>
      <ul id="mainMenu">
        <Icon icon={<FaTasks /> }text="Tasks" />
        <Icon icon= { <FaMedal /> }text="Leaderboard" />
        <Icon icon={ <CgProfile />} text="Profile" />
        <Icon icon={ <IoMdLogOut />} text="Logout" />
      </ul>
    </menu></div>
  );
}

const Icon = ({ icon, text }) => (
  <li className="menu-item">
    <div className="icon-container">
      {icon}
      <div className="button-container">
        <button className="sparkle-button">
          <span className="text">{text}</span>
        </button>
      </div>
    </div>
  </li>
);

export default Menu;
