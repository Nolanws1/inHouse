import React from 'react';

function FloorRow({ item, handleClick, index }) {
    return (
        <tr key={index}>
            <td onClick={handleClick}
                data-number={item.itemNumber}
                data-name={item.itemName}>
                {item != undefined && item.itemNumber}
            </td>
            <td onClick={handleClick}
                data-number={item.itemNumber}
                data-name={item.itemName}>
                {item != undefined && item.itemName}
            </td>
        </tr>
    )
}

export default FloorRow;