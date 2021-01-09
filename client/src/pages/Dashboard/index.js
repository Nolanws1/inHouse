import React from 'react'
import { Container } from '../../components/Grid/index';
import Navbar from '../../components/NavTabs/index';
import { BrowserRouter as Router } from "react-router-dom";


const Dashboard = () => {
    return (
        <Container className="-fluid">
            <Router>
            <Navbar />
            </Router>
        </Container>
    )
}

export default Dashboard
