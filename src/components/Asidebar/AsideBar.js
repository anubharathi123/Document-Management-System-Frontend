import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AsideBar.css';
import dropdownimg from '../../images/dropdown.png';
import dropupimg from '../../images/dropup.webp';
import companyLogo from '../../images/CompanyLogo.png';

const AsideBar = () => {
  // State to track which dropdown is open (both main and inner dropdowns)
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Toggle function for both main and inner dropdowns
  const toggleDropdown = (dropdownName, isInner = false) => {
    setOpenDropdowns(prevState => {
      const newState = { ...prevState };
      if (isInner) {
        newState[dropdownName] = !prevState[dropdownName];
      } else {
        // Close inner dropdown when main dropdown is toggled
        newState[dropdownName] = !prevState[dropdownName];
        // Close all inner dropdowns when the main dropdown is closed
        Object.keys(prevState).forEach(key => {
          if (key !== dropdownName) newState[key] = false;
        });
      }
      return newState;
    });
  };

  // Render dropdown icon based on whether it's open or not
  const renderDropdownIcon = (dropdownName) => {
    return openDropdowns[dropdownName] ? (
      <img src={dropupimg} alt="Drop Up" style={{ width: '25px', height: '25px', filter: 'hue-rotate(90deg)' }} />
    ) : (
      <img src={dropdownimg} alt="Drop Down" style={{ width: '25px', height: '25px', filter: 'hue-rotate(90deg)' }} />
    );
  };

  return (
    <aside className="aside-bar">
      <div className="logo">
        <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
          <img
            src={companyLogo}
            alt="Company Logo"
            style={{
              width: '100px',
              height: 'auto',
              filter: 'drop-shadow(2px 1px 0 rgb(255, 255, 255)) drop-shadow(-1px -1px 0 rgb(255, 255, 255)) drop-shadow(1px 1px 1px rgb(255, 255, 255))',
            }}
          />
        </a>
      </div>
      <nav>
        <ul>
          {/* Profile Dropdown */}
          <li className={`dropdown ${openDropdowns.profile ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('profile')} to="Profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Profile</p>
              {renderDropdownIcon('profile')}
            </NavLink>
            {openDropdowns.profile && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Profile Management
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Dashboard Dropdown */}
          <li className={`dropdown ${openDropdowns.dashboard ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('dashboard')} to="Dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Dashboard</p>
              {renderDropdownIcon('dashboard')}
            </NavLink>
            {openDropdowns.dashboard && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/audit-log" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Audit Log
                  </NavLink>
                </li>
                <li>
                <NavLink onClick={() => toggleDropdown('document', true)} to="#" className={({ isActive }) => ''}>
                 Document {renderDropdownIcon('document')}
                </NavLink>
                  {openDropdowns.document && (
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/document-creation" className={({ isActive }) => (isActive ? 'active' : '')}>
                          Document Creation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/document-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                          Document List
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              
                <li className={`dropdown ${openDropdowns.announcement ? 'open' : ''}`}>
                  <NavLink onClick={() => toggleDropdown('announcement', true )} to="#"className={({ isActive }) => ''}>
                    Announcement {renderDropdownIcon('announcement')}
                  </NavLink>
                  {openDropdowns.announcement && (
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/announcement-creation" className={({ isActive }) => (isActive ? 'active' : '')}>
                          Announcement Creation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/announcement-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                          Announcement List
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Create Admin Dropdown */}
          <li className={`dropdown ${openDropdowns['create-admin'] ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('create-admin')} to="create admin" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Create Admin</p>
              {renderDropdownIcon('create-admin')}
            </NavLink>
            {openDropdowns['create-admin'] && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/admin-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Admin List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Organization Dropdown */}
          <li className={`dropdown ${openDropdowns.organization ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('organization')} to="company-creation" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Organization</p>
              {renderDropdownIcon('organization')}
            </NavLink>
            {openDropdowns.organization && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/organization-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Organization List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Document Upload Dropdown */}
          <li className={`dropdown ${openDropdowns['document-upload'] ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('document-upload')} to="document upload" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Document upload</p>
              {renderDropdownIcon('document-upload')}
            </NavLink>
            {openDropdowns['document-upload'] && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/document-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Document List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Other Menu Items */}
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-creation" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Create User</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/documentview" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Document View</p>
            </NavLink>
          </li>
          <li className={`dropdown ${openDropdowns.verifydocument ? 'open' : ''}`}>
            <NavLink onClick={() => toggleDropdown('verifydocument')} to="Profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              <p>Verify Document</p>
              {renderDropdownIcon('verifydocument')}
            </NavLink>
            {openDropdowns.verifydocument && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/document-list" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Document List
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;
