import React from 'react'
import "./style.css";
import FloorPlanImg from '../../images/floorplans/floorplan.png';
import TodaysDate from '../../components/Date';
import Table from '../../components/DashTable';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="grid-container">
        <div className="dash-header">|</div>
        <div className="dash-col-1">
          <section className="welcome">
            <h1>Welcome, {user.name}!</h1>
            <TodaysDate />
          </section>
          <Link to='/floorplan'>
            <img src={FloorPlanImg} alt="floorplan button" className="floorplan" />
          </Link>
        </div>
        <div className="dashtable">
          <Table />
        </div>
      </div>
    )
  )
}

export default Dashboard;
