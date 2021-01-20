import React, { useEffect } from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import { UPDATE_ITEM } from "../../../utils/actions";
import FloorRow from "../FloorRow";
import API from "../../../utils/API";

function FloorContainer({ handleClick }) {
    const [state, dispatch] = useStoreContext();

    const getItems = () => {
        API.getItems()
            .then(results => {
                dispatch({
                    type: UPDATE_ITEM,
                    items: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <tbody>
            {state.items.length > 0 && state.items.map((item, index) => (
                <FloorRow
                    item={item}
                    handleClick={handleClick}
                    key={index}
                />
            ))}
        </tbody>
    );
}

export default FloorContainer;