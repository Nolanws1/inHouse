import React from 'react'
import { Nav } from 'react-bootstrap';
import "./style.css";


const NavTabs = () => {
    return (
        <div className="center">
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" className="text">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="text">Floorplan</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavTabs;