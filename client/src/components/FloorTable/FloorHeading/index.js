import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


function FloorHeading({ handleClick }) {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"
                        // onClick={handleClick}
                        data-value="first">
                        Item
                </th>
                </tr>
            </thead>
        )
    )
}

export default FloorHeading;