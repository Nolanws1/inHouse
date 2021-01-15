import React from 'react'
import "./style.css";
import FloorPlanImg from '../../images/floorplans/floorplan.png';
import Clock from '../../components/Clock';
import TodaysDate from '../../components/Date';
import Table from '../../components/DashTable';

const Dashboard = () => {

  return (
    <div className="grid-container">
      <div className="header">Header</div>
      <div className="dash-col-1">
        <section class="welcome">
          <h1>Welcome, _______!</h1>
          <Clock className="float-left" />
          <TodaysDate className="float-left" />
        </section>
        <img src={FloorPlanImg} alt="floorplan button" className="floorplan" />
      </div>
      <div className="table"><Table /></div>
      <footer className="main-footer">
        The footer
          </footer>
    </div>
  )
}

export default Dashboard;
