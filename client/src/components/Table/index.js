import React from 'react'
import './style.css'

const Table = () => {
    return (
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
}

export default Table;
