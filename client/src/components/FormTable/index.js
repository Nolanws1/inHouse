import React from 'react';
import FormHeading from "./FormHeading";
import FormContainer from "./FormContainer";
import { useAuth0 } from '@auth0/auth0-react';

const Table = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <table className="table table-dark m-3">
        <FormHeading />
        <FormContainer />
      </table>
    )
  );
}

export default Table;