import React from "react";


function FormHeading({ handleClick }) {
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
                    Qty.    
                </th>
                <th scope="col">
                    
                </th>
            </tr>
        </thead>
    )
}

export default FormHeading;