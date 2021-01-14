import React from 'react';
import './style.css';
import TableHeading from "./TableHeading";
import RowContainer from "./RowContainer";


const Table = () => {
  return (
    <table className="table table-dark m-3">
      <TableHeading />
      <RowContainer />
    </table>
  )
}

export default Table;
