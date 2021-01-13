import React from 'react'
// import { Container } from '../../components/Grid/index';
import Navbar from '../../components/NavTabs/index';
import { BrowserRouter as Router } from "react-router-dom";

import FloorPlanLayout from "../FloorPlanLayout";

const Dashboard = () => {
    return (
        // <Container className="-fluid">
        <div>
            <FloorPlanLayout />
        </div>
        // </Container>
    )
}

export default Dashboard;
