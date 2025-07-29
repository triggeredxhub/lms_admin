import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Login from "./pages/login"; // 👈 Add login
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Optional: decode token to get role
    const role = localStorage.getItem("role"); // You can set this during login
    if (token && role) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Redirect root to role-specific page */}
        <Route
          path="/"
          element={
            isAuthenticated && role ? (
              <Navigate to={`/${role}`} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            isAuthenticated && role === "admin" ? (
              <Admin />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Protected Student Route */}
        <Route
          path="/student"
          element={
            isAuthenticated && role === "student" ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
