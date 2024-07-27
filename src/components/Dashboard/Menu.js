import React from "react";
import "./Menu.css";
import { FaTasks, FaMedal } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Menu() {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    googleLogout(); // Call googleLogout
    localStorage.removeItem("isAuthenticated");
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div className="mymenu">
      <menu>
        <ul id="mainMenu">
          <Icon icon={<FaTasks />} text="Tasks" />
          <Icon icon={<FaMedal />} text="Leaderboard" />
          <Icon icon={<CgProfile />} text="Profile" />
          <button  onClick={handleLogout}>
          <Icon icon={<IoMdLogOut />} text="Logout" className="hoverable"/> </button>
        </ul>
      </menu>
    </div>
  );
}

const Icon = ({ icon, text, onClick }) => (
  <li className="menu-item">
    <div className="icon-container">
      {icon}
      <div className="button-container">
        <button className="sparkle-button" onClick={onClick}> {/* Attach onClick to button */}
          <span className="text">{text}</span>
        </button>
      </div>
    </div>
  </li>
);

export default Menu;
