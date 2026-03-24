import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/useAuth";

const Protected = () => {
  const { user } = useAuth();

  // If no user → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user exists → render child routes
  return <Outlet />;
};

export default Protected;