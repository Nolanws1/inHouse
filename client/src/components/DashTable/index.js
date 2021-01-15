import React from 'react';
import './style.css';
import DashHeading from "./DashHeading";
import DashContainer from "./DashContainer";
import { useAuth0 } from '@auth0/auth0-react';

const Table = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <table className="table table-dark m-3">
        <DashHeading />
        <DashContainer />
      </table>
    )
  );
}

export default Table;
