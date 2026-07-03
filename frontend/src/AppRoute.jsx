import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import App from "./App.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<App />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
