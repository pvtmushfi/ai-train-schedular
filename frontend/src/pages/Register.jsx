import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    await registerUser({ name, email, password });

    navigate("/login");
  };

  return (
    <div className="auth-bg">

      <div className="auth-overlay"></div>

      <div className="auth-center">

        <form className="glass-form" onSubmit={handleRegister}>

          <h2>🚆 Register</h2>
          <p>Create your Train AI account</p>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <button type="submit">Register</button>

          <p className="switch">
            Already have account? <Link to="/login">Login</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;