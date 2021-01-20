import React from 'react';
import FormHeading from "./FormHeading";
import FormContainer from "./FormContainer";

const FormTable = () => {
  return (
    <table className="table table-striped colorone">
      <FormHeading />
      <FormContainer />
    </table>
  );
}

export default FormTable;