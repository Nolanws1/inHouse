import React from 'react';
import './style.css';
import TableHeading from "./TableHeading";
import RowContainer from "./RowContainer";
import { useAuth0 } from '@auth0/auth0-react';

const Table = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <table className="table table-dark m-3">
        <TableHeading />
        <RowContainer />
      </table>
    )
  );
}

export default Table;
