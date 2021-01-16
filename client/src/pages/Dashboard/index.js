import React from 'react'
import "./style.css";
import FloorPlanImg from '../../images/floorplans/floorplan.png';
import TodaysDate from '../../components/Date';
import Table from '../../components/DashTable';

const Dashboard = () => {

  return (
    <div className="grid-container">
      <div className="dash-header">|</div>
      <div className="dash-col-1">
        <section class="welcome">
          <h1>Welcome!</h1>
          <TodaysDate />
        </section>
        <img src={FloorPlanImg} alt="floorplan button" className="floorplan" />
      </div>
      <div className="dashtable">
        <Table />
      </div>
    </div>
  )
}

export default Dashboard;
