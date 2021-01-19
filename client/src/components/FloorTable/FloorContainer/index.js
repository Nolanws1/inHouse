import React from "react";
import FloorRow from "../FloorRow";

function FloorContainer({ handleClick, items }) {

    return (
        <tbody>
            {items.length > 0 && items.map((item, index) => (
                <FloorRow
                    item={item}
                    handleClick={handleClick}
                    key={index}
                />
            ))}
        </tbody>
    );
}

export default FloorContainer;