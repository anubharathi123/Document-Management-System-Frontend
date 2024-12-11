import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AsideBar from "./components/AsideBar";
import Login from "./pages/Login";
import "./App.css";

function App() {
  // Function to handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("username");
    // Perform any additional logout actions here if needed
    window.location.href = "/login"; // Redirect to login page after logout
  };

  return (
    <Router>
      <div className="app">
        {/* Static AsideBar with Logout functionality */}
        <AsideBar onLogout={handleLogout} />

        {/* Main Content */}
        <main className="content">
          <Routes>
            {/* Route for Login */}
            <Route path="/login" element={<Login />} />

            {/* Fallback route for unmatched paths */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
