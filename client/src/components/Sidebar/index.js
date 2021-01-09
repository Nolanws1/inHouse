import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
// import { SidebarData } from './SidebarData';
import './style.css';

import { Link }  from 'react-router-dom';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    
    return (
        <div>
        <div>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
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
                <Link to="#" className="nav-text">
                <p>Test <FaIcons.FaCog /></p>
                </Link>
                </li>
                <li className="navbar-toggle">
                <Link to="#" className="nav-text">
                <p> Test2 <FaIcons.FaPaste /></p>
                </Link>
                </li>
                <li className="navbar-toggle">
                <Link to="#" className="nav-text">
                <p>Test3 <FaIcons.FaChalkboardTeacher /></p>
                </Link>
                </li>
                
            </ul>
        </nav>
        </div>
    )
}

export default Sidebar