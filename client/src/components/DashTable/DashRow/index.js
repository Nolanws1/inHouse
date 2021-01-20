import React from 'react';
import './style.css';

function DashRow({ item, index }) {
    return (
        <tr className="colorone" key={index}>
            <td>{item != undefined && item.itemNumber}</td>
            <td>{item != undefined && item.itemName}</td>
            <td>{item != undefined && item.qty}</td>
        </tr>
    )
}

export default DashRow;