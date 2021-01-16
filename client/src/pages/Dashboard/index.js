import React from 'react'
import "./style.css";
import FloorPlanImg from '../../images/floorplans/floorplan.png';
import Clock from '../../components/Clock';
import TodaysDate from '../../components/Date';
import Table from '../../components/DashTable';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {

  const { isAuthenticated } = useAuth0();

    return (
      isAuthenticated && ( 
        <div className="grid-container">
          <div className="dash-header">|</div>
          <div className="dash-col-1">
            <section class="welcome">
              <h1>Welcome, _______!</h1>
              <Clock  className="float-left" />
              <TodaysDate className="float-left" />
            </section>
            <img src={FloorPlanImg} alt="floorplan button" className="floorplan" />
          </div>
          <div className="dashtable">
          <Table />
          </div>
        </div>
      )
    )
}

export default Dashboard;
