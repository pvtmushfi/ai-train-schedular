import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    window.location.reload();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="logo">
        🚆 Train AI
      </div>

      {/* HAMBURGER (MOBILE ONLY) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>Dashboard</Link>
        <Link to="/live-trains" onClick={closeMenu}>Live Trains</Link>
        <Link to="/ai-prediction" onClick={closeMenu}>AI Prediction</Link>
        <Link to="/analytics" onClick={closeMenu}>Analytics</Link>
        <Link to="/alerts" onClick={closeMenu}>Alerts</Link>
        <Link to="/reports" onClick={closeMenu}>Reports</Link>
        <Link to="/profile" onClick={closeMenu}>Profile</Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;