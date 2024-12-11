import React from "react";
import './logout.css';

const Logout = ({ onLogout }) => {
  const handleLogoutClick = () => {
    // Call the provided onLogout function
    if (onLogout) {
      onLogout();
    }
    // Redirect to login page or perform any additional logout actions
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogoutClick} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
