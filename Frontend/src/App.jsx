import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./errors/Error";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SearchBar from "./pages/SearchBar";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./features/dashboard/dashboardComponent/dashboardMain/Dashboard";
import Services from "./pages/Services";
import About from "./pages/About";
import Security from "./pages/Security";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./features/admin/adminComponent/adminMain/Admin";
import ResetPassword from "./auth/ResetPassword";
import ResetPasswordToken from "./auth/ResetPasswordToken";
import VerifyOTP from "./auth/VerifyOTP";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />}></Route>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/security" element={<Security />} />

              <Route path="/login" element={<Login />} />
              <Route path="/open-account" element={<Register />} />
              <Route path="/searchBar" element={<SearchBar />} />

              <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route
                path="/ResetPassword/:token"
                element={<ResetPasswordToken />}
              />
              <Route path="/otp" element={<VerifyOTP />} />
            </Route>

            {/* USERDASHBOARD */}
            <Route path="/" element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* ADMINDASHBOARD */}
            <Route path="/" element={<AdminLayout />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            {/* ERROR PAGES */}

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
