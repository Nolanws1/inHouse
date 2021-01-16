import React from 'react'
import { Nav } from 'react-bootstrap';
import "./style.css";
import { useAuth0 } from '@auth0/auth0-react';


const NavTabs = () => {
  const { isAuthenticated } = useAuth0();

    return (
      isAuthenticated && (
        <div className="center nav-tabs">
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item className="tab">
                    <Nav.Link href="/dashboard" className="text">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item className="tab">
                    <Nav.Link href="/floorplan" className="text">Floorplan</Nav.Link>
                </Nav.Item>
                <Nav.Item className="tab">
                    <Nav.Link href="/forms" className="text">Forms</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
      )
    )
}

export default NavTabs;