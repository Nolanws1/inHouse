import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import './style.css';
import Clock from '../Clock/index';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const { logout, isAuthenticated } = useAuth0();
    
    return (
      isAuthenticated && (
        <div>
            <div>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Clock />
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' >
                    <li className="navbar-toggle" onClick={showSidebar}>
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaArrowAltCircleLeft />
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/dashboard" className="nav-text">
                            <FaIcons.FaCog />
                            <p>Dashboard </p>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/floorplan" className="nav-text">
                            <FaIcons.FaPaste />
                            <p>Floorplan </p>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/forms" className="nav-text">
                          <FaIcons.FaChalkboardTeacher />
                          <p>Forms</p> 
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <a onClick={() => logout()} className="nav-text sideLogout">
                            <FaIcons.FaSignOutAlt />
                            <p>Logout</p>
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
      )
    )
}

export default Sidebar