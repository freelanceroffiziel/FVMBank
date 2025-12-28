import React from 'react';
import Header from "../components/headerFooterComponents/Header";
import Footer from "../components/headerFooterComponents/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
