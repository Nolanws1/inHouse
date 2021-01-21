import React from "react";
import './style.css'


function DashHeading() {
    return (
        <thead>
            <tr className="color">
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Qty.</th>
            </tr>
        </thead>
    )
}

export default DashHeading;