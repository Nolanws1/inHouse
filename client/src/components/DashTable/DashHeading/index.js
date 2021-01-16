import React from "react";
import './style.css'


function TableHeading({ handleClick }) {
    return (
        <thead>
            <tr className="color">
                <th scope="col">#</th>
                <th scope="col"
                    // onClick={handleClick}
                    data-value="first">
                    Item
                </th>
                <th scope="col">
                    Qty.
                </th>
            </tr>
        </thead>
    )
}

export default TableHeading;