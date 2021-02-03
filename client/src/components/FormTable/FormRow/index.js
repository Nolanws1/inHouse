import React from 'react';
import DeleteBtn from '../../DeleteBtn';
import './index.css';

function FormRow({ item, index, removeItem }) {
    const deleteBtnClass = item.qty > 0 ? "display-none" : "delete-btn";

    return (
        <tr className="colorone" key={index}>
            <td>{item !== undefined && item.itemNumber}</td>
            <td>{item !== undefined && item.itemName}</td>
            <td>{item !== undefined && item.qty}</td>
            <td><DeleteBtn onClick={() => {if (window.confirm('Are you sure you want to delete this item?')) removeItem(item !== undefined && item._id)}} className={deleteBtnClass} /></td>
        </tr>
    )
}

export default FormRow;
