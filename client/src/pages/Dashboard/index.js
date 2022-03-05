import React from 'react'
import "./style.css";
import FloorPlanImg from '../../images/floorplans/floorplanCOLOR.png';
import TodaysDate from '../../components/Date';
import DashTable from '../../components/DashTable';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  return (
      <div className="grid-container">
        <div className="dash-header">|</div>
        <div className="dash-col-1">
          <section className="welcome">
            <h1>Welcome!</h1>
            <TodaysDate />
          </section>
          <Link to='/floorplan'>
            <img src={FloorPlanImg} alt="floorplan button" className="floorplan" />
          </Link>
        </div>
        <div className="dashtable">
          <DashTable />
        </div>
      </div>
  )
}

export default Dashboard;
