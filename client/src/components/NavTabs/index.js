import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "./style.css";

const NavTabs = () => {

  return (
      <div className="center nav-tabs no-display">
        <Nav justify variant="tabs" defaultActiveKey="/dashboard">
            <NavLink to="/dashboard" className="tab text" activeClassName="active">Dashboard</NavLink>
            <NavLink to="/floorplan" className="tab text" activeClassName="active">Floorplan</NavLink>
            <NavLink to="/forms" className="tab text" activeClassName="active">Inventory</NavLink>
        </Nav>
      </div>
  )
}

export default NavTabs;