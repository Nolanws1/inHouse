import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


function FormHeading({ handleClick }) {
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
                    <th scope="col"
                        // onClick={handleClick}
                        data-value="last">
                        Qty.
                </th>
                    <th scope="col">

                    </th>
                </tr>
            </thead>
        )
    )
}

export default FormHeading;