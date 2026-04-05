import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize user from localStorage immediately
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // smaller spinner
    return () => clearTimeout(timer);
  }, [location]);

  const login = (userData) => {
    setUser(userData.user);
    localStorage.setItem("user", JSON.stringify(userData.user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logout successful!");
    setTimeout(() => navigate("/login"), 1500);
  };

  const contextData = { loading, user, login, logout };

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <ThreeCircles color="#36d7b7" height={60} width={60} />
    </div>
  ) : (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;