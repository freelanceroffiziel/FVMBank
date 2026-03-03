import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./errors/Error";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import SearchBar from "./pages/SearchBar";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./features/dashboard/dashboardComponent/dashboardMain/Dashboard";
import Services from "./pages/Services";
import About from "./pages/About";
import Security from "./pages/Security";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./features/admin/adminMain/Admin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/security" element={<Security />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/searchBar" element={<SearchBar />} />
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
      </BrowserRouter>
    </>
  );
};

export default App;
