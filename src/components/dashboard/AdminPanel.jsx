import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SideNav from '../header/SideNav'

const AdminPanel = () => {
  return (
    <div id="layoutSidenav">
      <SideNav />
      <div id="layoutSidenav_content">
        <main>
          <Outlet />
        </main>
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright © Your Website 2023</div>
              <div>
                <NavLink to="#">Privacy Policy</NavLink>
                <NavLink to="#">Terms &amp; Conditions</NavLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AdminPanel