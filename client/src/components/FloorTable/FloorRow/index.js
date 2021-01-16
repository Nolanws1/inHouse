import React from 'react';

function FloorRow({ item, handleClick, index }) {
    return (
        <tr key={index} onClick={handleClick}>
            <td>{item != undefined && item.itemNumber}</td>
            <td>{item != undefined && item.itemName}</td>
        </tr>
    )
}

export default FloorRow;