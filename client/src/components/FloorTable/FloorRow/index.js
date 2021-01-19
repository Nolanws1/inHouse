import React from 'react';

function handleOver(e) {
    e.target.style.background = "#6C757D";
}
function handleLeave(e) {
    e.target.style.background = "#343A40";
}

function FloorRow({ item, handleClick, index }) {
    return (
        <tr key={index}>
            <td onClick={handleClick}
                onMouseOver={handleOver}
                onMouseLeave={handleLeave}
                data-number={item.itemNumber}
                data-name={item.itemName}>
                {item != undefined && item.itemNumber}
            </td>
            <td onClick={handleClick}
                onMouseOver={handleOver}
                onMouseLeave={handleLeave}
                data-number={item.itemNumber}
                data-name={item.itemName}>
                {item != undefined && item.itemName}
            </td>
        </tr>
    )
}

export default FloorRow;