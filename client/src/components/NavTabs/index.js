import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "./style.css";
import { useAuth0 } from '@auth0/auth0-react';

const NavTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="center nav-tabs">
        <Nav justify variant="tabs" defaultActiveKey="/dashboard">
            <NavLink to="/dashboard" className="tab text" activeClassName="active">Dashboard</NavLink>
            <NavLink to="/floorplan" className="tab text" activeClassName="active">Floorplan</NavLink>
            <NavLink to="/forms" className="tab text" activeClassName="active">Forms</NavLink>
        </Nav>
      </div>
    )
  )
}

export default NavTabs;