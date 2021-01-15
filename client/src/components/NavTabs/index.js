import React from 'react'
import { Nav } from 'react-bootstrap';
import "./style.css";

const NavTabs = () => {

  return (
    <div className="center nav-tabs">
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/dashboard" className="text">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/floorplan" className="text">Floorplan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/forms" className="text">Forms</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavTabs;