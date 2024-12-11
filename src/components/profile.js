import React from 'react';
import './App.css'; // Include your CSS here

const App = () => {
    return (
        <div style={{ background: "rgb(248, 249, 250)" }}>
            <Header />
            <div className="navigate_section">
                <img src="/images/company_logo.png" alt="Company logo" className="company_logo" />
                <Sidebar />
            </div>
            <ProfileView />
        </div>
    );
};

const Header = () => (
    <div className="tab">
        <br/>
        <div className="search">
        <button type="button" className="searchbtn">
            <img src={require('./images/search_icon.png')}
                alt="Search"
                className="search_icon"
            />
        </button>
        </div>
        <button type="button" className="notificationbtn">
            <img
                src={require('./images/notification-icon.png')}
                alt="Notifications"
                className="notification-icon"
            />
        </button>
        <button type="button" className="profilebtn">
            <img
                src={require('./images/candidate-profile.png')}
                alt="Candidate profile"
                className="profile-image"
            />
        </button>
    </div>
);

const Sidebar = () => (
    <>
        <button type="button" className="profile_btn">Profile</button>
        <Dropdown title="Dashboard">
            <button type="button" className="link-button">Audit Log</button>
            <button type="button" className="link-button">Document Search</button>
            <Dropdown title="Announcements">
                <button type="button" className="link-button">Create Announcement</button>
                <button type="button" className="link-button">Announcement List</button>
            </Dropdown>
        </Dropdown>
        <Dropdown title="Create">
            <Dropdown title="Admin">
                <button type="button" className="link-button">Create Admin</button>
                <button type="button" className="link-button">Admin List</button>
            </Dropdown>
            <Dropdown title="Organization">
                <button type="button" className="link-button">Create Company</button>
                <button type="button" className="link-button">Company List</button>
            </Dropdown>
        </Dropdown>
        <button type="button" className="settings_btn">Settings</button>
    </>
);


const Dropdown = ({ title, children }) => (
    <div className="dropdown">
        <button type="button" className="dashboard_btn">
            {title} ›
        </button>
        <div className="dropdown-list">{children}</div>
    </div>
);

const ProfileView = () => (
    <div className="profile_view">
        <h1 style={{ color: "black" }}>
            <b>
                <center>Candidate Profile</center>
            </b>
        </h1>
        <br />
        <h2
            style={{
                marginLeft: "270px",
                marginTop: "-70px",
                paddingBottom: "32px",
                marginBottom: "69px",
            }}
        >
            Name of the Candidate
        </h2>
        <hr className="line" />
        <ProfileForm />
    </div>
);

const ProfileForm = () => (
    <>
        <label htmlFor="role" style={{ marginLeft: "115px" }}>
            Role
        </label>
        <input
            type="text"
            id="role"
            name="rolename"
            style={{ marginLeft: "54px", width: "300px", marginBottom: "20px" }}
            required
        />
        <br />
        <label htmlFor="email-id" style={{ marginLeft: "115px" }}>
            Email ID
        </label>
        <input
            type="email"
            id="email-id"
            name="email-id"
            style={{ marginLeft: "25px", width: "300px", marginBottom: "20px" }}
            required
        />
        <br />
        <label htmlFor="mobileno" style={{ marginLeft: "115px" }}>
            Mobile
        </label>
        <input
            type="number"
            id="mobileno"
            name="mobileno"
            style={{ marginLeft: "39px", width: "300px" }}
            required
        />
    </>
);

export default App;
