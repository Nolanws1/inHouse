import React from 'react'
import './style.css'
import { useAuth0 } from '@auth0/auth0-react';

const Table = () => {

  const { isAuthenticated } = useAuth0();
  
    return (
      isAuthenticated && (
        <table className="table table-dark color">
          <thead className="color">
            <tr>
              <th scope="col">Item #</th>
              <th scope="col">Item</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1908-S</td>
              <td>LONDON Swivel Chair blue</td>
              <td>Chair</td>
            </tr>
          </tbody>
        </table>
      )
    )
}

export default Table;
