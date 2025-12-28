import React, { Children, useState } from "react";
import AuthContext from "./context";

const AuthContextProvider = ({ Children }) => {
  const [loading, setLoading] = useState(true);

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
          <Oval color="#36d7b7" height={60} width={60} />
        </div>
      ) : (
        <AuthContext.Provider value={contextData}>
          {Children}
        </AuthContext.Provider>
      )}
    </>
  );
};

export default AuthContextProvider;
