import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AsideBar.css';
import dropdownimg from '../Images/dropdown2.png'
import dropupimg from '../Images/dropup.webp'


const AsideBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <aside className="aside-bar">
      <div className="logo">
        <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
          {/* Logo or branding can go here */}
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/logo" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-dashboard"></i> Logo
            </NavLink>
          </li>

          <li className={`dropdown ${openDropdown === 'profile' ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('profile')} to="#" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Profile</p> 
              {openDropdown === 'profile' && (
               <img 
               src={dropupimg} 
               style={{ width: '25px', height: '25px',filter: 'hue-rotate(90deg)',color:'white' }}
               />
                  )}
              {openDropdown === null && (
               <img 
               src={dropdownimg} 
               style={{ width: '25px', height: '25px',filter: 'hue-rotate(90deg)',color:'white' }}
               
               />
                  )}
              {/* <i className={`fas dropdown-icon ${openDropdown === 'profile'? 'fa-chevron-up' : 'fa-chevron-down'}`}></i> */}
              </NavLink>
              {openDropdown === 'profile' && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Profile Management
                    </NavLink>
                    </li>
                    </ul>
                  )}
                  </li>

          <li className={`dropdown ${openDropdown === 'dashboard' ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('dashboard')} to="#" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-fill"></i> Dashboard
            </NavLink>
            {openDropdown === 'dashboard' && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/audit-log" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Audit Log
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/document-search" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Document Search
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/document creation" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Document Creation
                  </NavLink>
                </li>
                <li className={`dropdown ${openDropdown === 'announcement' ? 'open' : ''}`}>
                  <NavLink onClick={() => toggleDropdown('announcement')} to="#" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Announcement
                  </NavLink>
                  {openDropdown === 'announcement' && (
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/announcement-creation" className={({ isActive }) => (isActive ? 'active' : '')}>
                          Announcement Creation
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className={`dropdown ${openDropdown === 'create-admin' ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('create-admin')} to="" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-pencil"></i> Create Admin
            </NavLink>
            {openDropdown === 'create-admin' && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/admin-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Admin List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className={`dropdown ${openDropdown === 'organization' ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('organization')} to="/company-creation" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-edit"></i> Organization
            </NavLink>
            {openDropdown === 'organization' && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/organization-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Organization List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className={`dropdown ${openDropdown === 'document-upload' ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('document-upload')} to="/document-upload" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-upload"></i> Document Upload
            </NavLink>
            {openDropdown === 'document-upload' && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/document-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Document List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-check-circle"></i> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-creation" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-check-circle"></i> Create User
            </NavLink>
          </li>
          <li>
            <NavLink to="/documentview" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-check-circle"></i> Document View
            </NavLink>
          </li>
          <li>
            <NavLink to="/Verifydocument" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i className="fas fa-check-circle"></i> Verify Document
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;
