import React from 'react';

function handleOver(e) {
    e.target.style.background = "#A4C3B2";
}
function handleLeave(e) {
    e.target.style.background = "#CCE3DE";
}

function FloorRow({ item, handleClick, index }) {
    return (
        <tr className="colorone" key={index}>
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