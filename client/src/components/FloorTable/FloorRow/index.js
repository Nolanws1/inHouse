import React from 'react';

function FloorRow({ item, index }) {
    return (
        <tr key={index}>
            <td>{item != undefined && item.itemNumber}</td>
            <td>{item != undefined && item.itemName}</td>
        </tr>
    )
}

export default FloorRow;