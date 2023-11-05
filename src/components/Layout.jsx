import React, { useState } from "react";
import NavBar from "./header/NavBar";
import SideNav from "./header/SideNav";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebar,setSidebar]=useState(true);
  const sidebarToggle=()=>{
    setSidebar(!isSidebar);
  }
  return (
    <>
      <div className={`sb-nav-fixed ${isSidebar?"":`sb-sidenav-toggled`}`}>
        <NavBar sidebarToggle={sidebarToggle} />
        <div id="layoutSidenav">
          <SideNav />
          <div id="layoutSidenav_content">
            <main>
              <Outlet />
            </main>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright © Your Website 2023
                  </div>
                  <div>
                    <NavLink to="#">Privacy Policy</NavLink>
                    <NavLink to="#">Terms &amp; Conditions</NavLink>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
