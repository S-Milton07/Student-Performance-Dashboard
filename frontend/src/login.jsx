/**
 * ==========================================================================================
 * LOGIN PAGE COMPONENT (Login.jsx)
 * ==========================================================================================
 * Standalone login page. Renders first when the app starts. On successful credential
 * match, navigates to the existing dashboard (App.jsx) using React Router.
 *
 * IMPORTANT: This file does NOT modify App.jsx in any way. App.jsx's existing code,
 * UI, state, and API calls remain completely untouched. This component only handles
 * authentication and then hands off control to the router, which renders App.jsx
 * at the "/dashboard" route exactly as it already is.
 *
 * Design language: reuses the same glassmorphism / dark-grey gradient / glass-card
 * visual system as the existing App.css so the login page feels like part of the
 * same application. Layout-specific rules unique to the login page (the centered
 * single card, the input fields, the error message) live in Login.css.
 * ==========================================================================================
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";   // reuse the existing dashboard's color tokens, fonts, glass styles
import "./Login.css"; // login-page-specific layout on top of those shared tokens

// Hardcoded credentials as specified in the requirements.
// (For a real production system these would be validated against a backend/auth
// service rather than hardcoded on the client — kept simple here per the request.)
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

    // Small artificial delay so the button's "checking" state and the page
    // transition feel smooth and intentional, rather than an instant jump cut.
    setTimeout(() => {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Successful match -> navigate to the existing dashboard (App.jsx),
        // which is rendered at the "/dashboard" route, completely unchanged.
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
