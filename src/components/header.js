import React, { useState } from "react";
import './profile.css';

const App = () => {
    return (
        <div style={{ background: "rgb(248, 249, 250)" }}>
            <Header />
        </div>
    );
};

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Tracks which dropdown is open
    const [query, setQuery] = useState(""); // State for search input
    const [suggestions, setSuggestions] = useState([]); // State for suggestions

    const notifications = [
        "New announcement created",
        "Company profile updated",
        "Admin added a new user",
        "System maintenance scheduled",
        "New document uploaded",
    ];

    const allSuggestions = [
        "Find Company",
        "Find Documents",
        "Find Admin",
        "Admin List",
        "Company List",
        "Announcement List",
        "Audit Log",
        "Settings",
    ];

    const handleSearchInput = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (value) {
            const filteredSuggestions = allSuggestions.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="tab">
            {/* Search Button */}
            <button
                type="button"
                className="searchbtn"
                onClick={() => setActiveDropdown(activeDropdown === "search" ? null : "search")}
            >
                <img
                    src={require('./images/search_icon.png')}
                    alt="Search"
                    className="search_icon"
                />
            </button>

            {/* Search Bar with Suggestions */}
            {activeDropdown === "search" && (
                <div className="search-bar-container">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchInput}
                        placeholder="Search..."
                        className="search-input"
                    />

                    {suggestions.length > 0 && (
                        <ul className="search-suggestions">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="suggestion-item"
                                    onClick={() => {
                                        setQuery(suggestion);
                                        setSuggestions([]);
                                        setActiveDropdown(null);
                                    }}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}

                    {query && suggestions.length === 0 && (
                        <p className="no-suggestions">No suggestions found</p>
                    )}
                </div>
            )}

            {/* Notification Button */}
            <button
                type="button"
                className="notificationbtn"
                onClick={() => setActiveDropdown(activeDropdown === "notification" ? null : "notification")}
            >
                <img
                    src={require('./images/notification-icon.png')}
                    alt="Notifications"
                    className="notification-icon"
                />
            </button>

            {/* Notification Dropdown */}
            {activeDropdown === "notification" && (
                <div className="notification-dropdown">
                    <button
                        type="button"
                        className="close-button"
                        onClick={() => setActiveDropdown(null)}
                    >
                        &times;
                    </button>
                    <ul className="notification-list">
                        {notifications.map((notification, index) => (
                            <li key={index} className="notification-item">
                                {notification}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Profile Button */}
            <button
                type="button"
                className="profilebtn"
                onClick={() => setActiveDropdown(activeDropdown === "profile" ? null : "profile")}
            >
                <img
                    src={require('./images/candidate-profile.png')}
                    alt="Candidate profile"
                    className="profile-image"
                />
            </button>

            {/* Profile Dropdown */}
            {activeDropdown === "profile" && (
                <div className="profile-dropdown">
                    <p><b>Name:</b> John Doe</p>
                    <p><b>Email:</b> john.doe@example.com</p>
                    <button
                        type="button"
                        className="signout-button"
                        onClick={() => alert("Sign Out Clicked")}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default App;