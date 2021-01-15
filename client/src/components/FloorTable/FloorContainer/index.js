import React, { useEffect } from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import { UPDATE_ITEM, LOADING } from "../../../utils/actions";
import FloorRow from "../FloorRow";
import API from "../../../utils/API";

function FloorContainer() {
    const [state, dispatch] = useStoreContext();

    const getItems = () => {
        dispatch({ type: LOADING });
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
                    key={index}
                />
            ))}
        </tbody>
    );
}

export default FloorContainer;