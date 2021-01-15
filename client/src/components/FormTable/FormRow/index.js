import React from 'react';
import DeleteBtn from '../../DeleteBtn';
import { useAuth0 } from '@auth0/auth0-react';


function FormRow({ item, index, removeItem }) {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <tr key={index}>
                <td>{item != undefined && item.itemNumber}</td>
                <td>{item != undefined && item.itemName}</td>
                <td>{item != undefined && item.qty}</td>
                <td><DeleteBtn onClick={() => removeItem(item != undefined && item._id)} /></td>
            </tr>
        )
    )
}

export default FormRow;