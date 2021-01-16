import React from 'react'
import { Nav } from 'react-bootstrap';
import "./style.css";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const NavTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="center nav-tabs">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Link to="/dashboard" className="text">Dashboard</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/floorplan" className="text">Floorplan</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/forms" className="text">Forms</Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  )
}

export default NavTabs;