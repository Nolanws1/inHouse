import React from 'react';
import FloorHeading from "./FloorHeading";
import FloorContainer from "./FloorContainer";
import { useAuth0 } from '@auth0/auth0-react';

const Table = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <table className="table table-dark m-3">
       <FloorHeading />
       <FloorContainer />
      </table>
    )
  );
}

export default Table;