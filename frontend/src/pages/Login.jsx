import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await loginUser({ email, password });

    if (response) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-bg">

      {/* OVERLAY */}
      <div className="auth-overlay"></div>

      {/* FORM */}
      <div className="auth-center">

        <form className="glass-form" onSubmit={handleLogin}>

          <h2>🚆 Login</h2>
          <p>Welcome back to Train AI System</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <p className="switch">
            Don’t have account? <Link to="/register">Register</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;