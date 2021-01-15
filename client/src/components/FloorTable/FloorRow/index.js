import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function FloorRow({ item, index }) {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <tr key={index}>
                <td>{item != undefined && item.itemNumber}</td>
                <td>{item != undefined && item.itemName}</td>
            </tr>
        )
    )
}

export default FloorRow;