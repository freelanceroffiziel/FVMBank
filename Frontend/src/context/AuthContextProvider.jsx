import React, { useState, useEffect } from "react";
import AuthContext from "./context";
import {ThreeCircles } from "react-loader-spinner"; 

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

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