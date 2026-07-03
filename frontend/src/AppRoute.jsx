/**
 * ==========================================================================================
 * ROUTING SETUP (AppRoutes.jsx)
 * ==========================================================================================
 * This file defines the application's routes. It imports the existing App.jsx
 * (UNCHANGED) and the new Login.jsx, and wires them together:
 *
 *    "/"          -> Login page (shown first when the app starts)
 *    "/dashboard" -> existing App.jsx dashboard (exactly as-is, no modifications)
 *
 * App.jsx itself is imported and rendered with zero edits — none of its existing
 * state, UI, or API calls are touched. This file is the ONLY place that contains
 * routing logic, keeping App.jsx clean per the requirements.
 * ==========================================================================================
 */

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login.jsx";
import App from "./App.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Login page is the default/first screen shown */}
      <Route path="/" element={<Login />} />

      {/* Existing dashboard — App.jsx, completely unchanged */}
      <Route path="/dashboard" element={<App />} />

      {/* Any unknown route falls back to the login page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
