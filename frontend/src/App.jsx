import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LiveTrains from "./pages/LiveTrains";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import AIPrediction from "./components/AIPrediction";

function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>

      <div className="app-layout">

        {/* NAVBAR ONLY AFTER LOGIN */}
        {isLoggedIn && <Navbar />}

        {/* MAIN CONTENT AREA */}
        <div className="app-content">

          <Routes>

            {/* PUBLIC */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PROTECTED */}
            <Route
              path="/"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />

            <Route
              path="/live-trains"
              element={isLoggedIn ? <LiveTrains /> : <Navigate to="/login" />}
            />

            <Route
              path="/analytics"
              element={isLoggedIn ? <Analytics /> : <Navigate to="/login" />}
            />

            <Route
              path="/alerts"
              element={isLoggedIn ? <Alerts /> : <Navigate to="/login" />}
            />

            <Route
              path="/reports"
              element={isLoggedIn ? <Reports /> : <Navigate to="/login" />}
            />

            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
            />

            <Route
              path="/ai-prediction"
              element={isLoggedIn ? <AIPrediction /> : <Navigate to="/login" />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;