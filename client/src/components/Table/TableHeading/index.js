import React from "react";

function TableHeading({ handleClick }) {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col"
                    // onClick={handleClick}
                    data-value="first">
                    Item
                </th>
                <th scope="col"
                    // onClick={handleClick}
                    data-value="last">
                </th>
                <th scope="col">
                    Qty.
                </th>
            </tr>
        </thead>
    )
}

export default TableHeading;