import React from "react";

//These colors should change
function handleOver(e) {
    e.target.style.background = "#8AAABB";
    e.target.style.color = "black";
}
function handleLeave(e) {
    e.target.style.background = "#4B647C";
    e.target.style.color = "white";
}

function FloorHeading({ handleSort }) {
    return (
        <thead>
            <tr className="color">
                <th scope="col"
                    data-value="itemNumber"
                    onClick={handleSort}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}>
                    #</th>
                <th scope="col"
                    data-value="itemName"
                    onClick={handleSort}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}>
                    Item
                </th>
            </tr>
        </thead>
    )
}

export default FloorHeading;