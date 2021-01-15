import React from 'react';

function DashRow({ item, index }) {
    return (
        <tr key={index}>
            <td>{item != undefined && item.itemNumber}</td>
            <td>{item != undefined && item.itemName}</td>
            <td></td>
            <td>{item != undefined && item.qty}</td>
            
        </tr>
    )
}

export default DashRow;