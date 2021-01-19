import React from "react";

function handleOver(e) {
    e.target.style.background = "#6C757D";
}
function handleLeave(e) {
    e.target.style.background = "#343A40";
}

function FloorHeading({ handleSort }) {
    return (
        <thead>
            <tr>
                <th scope="col"
                    data-value="itemNumber"
                    onClick={handleSort}>
                    #</th>
                <th scope="col"
                    data-value="itemName"
                    onClick={handleSort}>
                    Item
                </th>
            </tr>
        </thead>
    )
}

export default FloorHeading;