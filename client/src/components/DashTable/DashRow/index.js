import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function DashRow({ item, index }) {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <tr key={index}>
                <td>{item != undefined && item.itemNumber}</td>
                <td>{item != undefined && item.itemName}</td>
                <td></td>
                <td>{item != undefined && item.qty}</td>
            </tr>
        )
    )
}

export default DashRow;