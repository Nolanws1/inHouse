import React from 'react';
import FloorHeading from "./FloorHeading";
import FloorContainer from "./FloorContainer";

const FloorTable = ({ handleClick }) => {

  return (
    <table className="table table-dark m-3">
      <FloorHeading />
      <FloorContainer handleClick={handleClick} />
    </table>
  );
}

export default FloorTable;