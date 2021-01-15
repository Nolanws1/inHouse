import React from 'react';
import FloorHeading from "./FloorHeading";
import FloorContainer from "./FloorContainer";

const Table = () => {

  return (
    <table className="table table-dark m-3">
      <FloorHeading />
      <FloorContainer />
    </table>
  );
}

export default Table;