import React from "react";
import Menus from "../Menus/Menus";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="top-navbar">
        <Menus />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
