// src/components/AsideBar.js
import React from 'react';
import { NavLink} from 'react-router-dom';
// import './AsideBar.js';
import './AsideBar.css';
// import Logout from '../Logout/logout';

const AsideBar = ({ onLogout }) => {
  // const navigate = useNavigate();

  // Retrieve the username from localStorage
  const username = localStorage.getItem('username'); 

  // const handleLogout = async () => {
  //   await apiService.logout();
  //   onLogout();
  //   navigate('/login');
  // };

  return (
    <aside className="aside-bar">
      <div className="logo">
        <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
        
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/logo" className={({ isActive }) => isActive ? 'active' : ''}>
              <i className="fas fa-dashboard"></i> Logo
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" className={({ isActive }) => isActive ? 'active' : ''}>
              <i className="fas fa-fill"></i> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) => isActive ? 'active' : ''}>
              <i className="fas fa-gift"></i> Dashboard
            </NavLink>
          </li>
          
          {/* Conditionally render CreateForm button */}
          {username === "admin" && (
            <li>
              <NavLink to="/create-form" className={({ isActive }) => isActive ? 'active' : ''}>
                <i className="fas fa-pencil"></i> Create Admin
              </NavLink>
            </li>
          )}
          {username === "admin" && (
            <li>
              <NavLink to="/form-edit" className={({ isActive }) => isActive ? 'active' : ''}>
                <i className="fas fa-edit"></i> Organization
              </NavLink>
            </li>
          )}
          {username === "admin" && (
            <li>
              <NavLink to="/Settings" className={({ isActive }) => isActive ? 'active' : ''}>
                <i className="fas fa-edit"></i> Settings
              </NavLink>
            </li>
          )}

{username === "admin" && (
            <li>
              <NavLink to="/Documentupload" className={({ isActive }) => isActive ? 'active' : ''}>
                <i className="fas fa-area-chart"></i> Document upload
              </NavLink>
            </li>
          )}
          
          <li className='logoutbutton-list'>
            {/* <Logout /> */}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;
