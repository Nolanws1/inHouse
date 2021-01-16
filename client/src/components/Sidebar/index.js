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
                            <p>Dashboard <FaIcons.FaCog /></p>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/floorplan" className="nav-text">
                            <p>Floorplan <FaIcons.FaPaste /></p>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/forms" className="nav-text">
                            <p>Forms <FaIcons.FaChalkboardTeacher /></p>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <a onClick={() => logout()} className="nav-text">
                            <p>Logout <FaIcons.FaSignOutAlt /></p>
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
      )
    )
}

export default Sidebar