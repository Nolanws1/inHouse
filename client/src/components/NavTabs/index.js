import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "./style.css";

const NavTabs = () => {

  return (
    <div className="center nav-tabs">
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item className="tab">
          <Link to="/dashboard" className="text">Dashboard</Link>
        </Nav.Item>
        <Nav.Item className="tab">
          <Link to="/floorplan" className="text">Floorplan</Link>
        </Nav.Item>
        <Nav.Item className="tab"> 
          <Link to="/forms" className="text">Forms</Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavTabs;