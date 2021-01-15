import React from 'react';
import './style.css';
import DashHeading from "./DashHeading";
import DashContainer from "./DashContainer";

const Table = () => {

  return (
    <table className="table table-dark m-3">
      <DashHeading />
      <DashContainer />
    </table>
  );
}

export default Table;
