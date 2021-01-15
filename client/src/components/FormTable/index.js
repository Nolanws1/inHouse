import React from 'react';
import FormHeading from "./FormHeading";
import FormContainer from "./FormContainer";

const Table = () => {
  return (
    <table className="table table-dark m-3">
      <FormHeading />
      <FormContainer />
    </table>
  );
}

export default Table;