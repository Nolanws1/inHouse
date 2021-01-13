import React from 'react'
// import { Container } from '../../components/Grid/index';
import Navbar from '../../components/NavTabs/index';
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import { ListGroupItem } from 'react-bootstrap';
import FloorPlanImg from '../../images/floorplans/floorplan.png';

const Dashboard = () => {
    return (
    <div className="grid-container">
            <div className="header">Header</div>
            
            
            <div className="dash-col-1">
                <section class="welcome">
                <h1>Welcome, _______!</h1>
                <h2>00:00 |  Jan, 3, 2021</h2>
                </section>
                <img src={FloorPlanImg} alt="floorplan button" className="floorplan" />
            </div>
            
            
            
            
            <div className="table">Table</div>
    </div>
    )
}

export default Dashboard;
