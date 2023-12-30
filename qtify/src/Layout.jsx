import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./Layout.css";

const Layout = () => {
    return (
      <div className="layout">
        {/* Render the navigation bar */}
        <NavBar /> 
        </div>
  );
};

export default Layout;