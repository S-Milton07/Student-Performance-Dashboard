import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";   
import "./Login.css"; 

const VALID_USERNAME = "MiltonLawrence";
const VALID_PASSWORD = "Milton@2005";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsChecking(true);

    setTimeout(() => {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      
        navigate("/dashboard");
      } else {
        setError("Invalid username or password. Please try again.");
        setIsChecking(false);
      }
    }, 450);
  };

  return (
    <div className="app login-app">
      <h1>Student Performance Dashboard</h1>

      <div className="login-wrapper">
        <form className="login-card" onSubmit={handleLogin}>
          <div className="login-icon">🔐</div>

          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">
            Sign in to access your performance analytics
          </p>

          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="login-error">⚠ {error}</p>}

          <button type="submit" className="login-btn" disabled={isChecking}>
            {isChecking ? "Verifying..." : "Login"}
          </button>

          <p className="login-footer">
            Authorized access only · Student Performance Dashboard
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;