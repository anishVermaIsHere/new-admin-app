import React from 'react'
import { NavLink } from 'react-router-dom'
import { URL_LINK } from '../../config/routes/contants.';


const sidebarMenuList=[
  {
      label:'Dashboard',
      path:'/',
      icon:<i className="fas fa-tachometer-alt" />,
      id:1
  },
  {
      label:'Layouts',
      path:'#',
      icon:<i className="fas fa-columns" />,
      id:2
  }
];


const SideNav = () => {
  const {LAYOUTS,AUTH,CHARTS,TABLES}=URL_LINK;
  return (
    <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                Dashboard
              </NavLink>
              <div className="sb-sidenav-menu-heading">Interface</div>
              <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                Layouts
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </NavLink>
              <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav"> 
                  <NavLink className="nav-link" to={LAYOUTS.STATIC}>Static Navigation</NavLink>
                  <NavLink className="nav-link" to={LAYOUTS.LIGHT_SIDENAV}>Light Sidenav</NavLink>
                </nav>
              </div>
              <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                Pages
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </NavLink>
              <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                  <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                    Authentication
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </NavLink>
                  <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <NavLink className="nav-link" to={AUTH.LOGIN}>Login</NavLink>
                      <NavLink className="nav-link" to={AUTH.REGISTER}>Register</NavLink>
                      <NavLink className="nav-link" to={AUTH.FORGOT_PWD}>Forgot Password</NavLink>
                    </nav>
                  </div>
                  <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                    Error
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </NavLink>
                  <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <NavLink className="nav-link" to="/401">401 Page</NavLink>
                      <NavLink className="nav-link" to="/*">404 Page</NavLink>
                      <NavLink className="nav-link" to="/500">500 Page</NavLink>
                    </nav>
                  </div>
                </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Addons</div>
              <NavLink className="nav-link" to={CHARTS}>
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                Charts
              </NavLink>
              <NavLink className="nav-link" to={TABLES}>
                <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                Tables
              </NavLink>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div>
        </nav>
      </div>
  )
}

export default SideNav