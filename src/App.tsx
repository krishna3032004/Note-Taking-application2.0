import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/SignIn";
import SignupPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"; // Context import karein

function App() {
  // check user login from localStorage (JWT token)
  // const isAuthenticated = !!localStorage.getItem("token");
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Naya Home Route */}
        <Route path="/" element={!isAuthenticated ? <HomePage /> : <Navigate to="/dashboard" />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!isAuthenticated ? <SignupPage /> : <Navigate to="/dashboard" />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} // Agar login nahi hai to home par bhejo
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
