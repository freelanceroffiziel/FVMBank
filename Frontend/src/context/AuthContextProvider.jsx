import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "./context";
import { ThreeCircles } from "react-loader-spinner";

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate loading delay

    return () => clearTimeout(timer);
  }, [location]); // runs on every route change

  const contextData = {
    loading,
  };

  return (
    <>
      {loading ? (
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
        <AuthContext.Provider value={contextData}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

export default AuthContextProvider;