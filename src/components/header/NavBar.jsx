import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const userNavlinkList=[
    {
        label:'Settings',
        path:'#',
        id:1
    },
    {
        label:'Activity Log',
        path:'#',
        id:2
    }
]
const NavBar = ({sidebarToggle}) => {
    const [userMenuList,setUserMenuList]=useState(userNavlinkList);
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    {/* Navbar Brand*/}
    <NavLink className="navbar-brand ps-3" href="index.html">Start Bootstrap</NavLink>
    {/* Sidebar Toggle*/}
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={sidebarToggle}>
      <i className="fas fa-bars" />
      </button>
    {/* Navbar Search*/}
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div className="input-group">
        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
      </div>
    </form>
    {/* Navbar*/}
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-user fa-fw" />
        </NavLink>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          {userMenuList.map((list)=>(
          <li key={'usermenu-list'+list.id}>
            <NavLink className="dropdown-item" to={list.path}>
                {list.label}
            </NavLink>
          </li>
          ))}
          <li><hr className="dropdown-divider" /></li>
          <li><NavLink className="dropdown-item" to="#!">Logout</NavLink></li>
        </ul>
      </li>
    </ul>
  </nav>
  )
}

export default NavBar