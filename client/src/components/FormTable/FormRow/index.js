import React from 'react';
import DeleteBtn from '../../DeleteBtn';

function FormRow({ item, index, removeItem }) {
    return (
        <tr className="colorone" key={index}>
            <td>{item != undefined && item.itemNumber}</td>
            <td>{item != undefined && item.itemName}</td>
            <td>{item != undefined && item.qty}</td>
            <td><DeleteBtn onClick={() => removeItem(item!= undefined && item._id)} /></td>
        </tr>
    )
}

export default FormRow;
