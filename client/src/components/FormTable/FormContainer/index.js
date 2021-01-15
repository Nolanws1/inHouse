import React, { useEffect } from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import { REMOVE_ITEM, UPDATE_ITEM, LOADING } from "../../../utils/actions";
import FormRow from "../FormRow";
import API from "../../../utils/API";

function RowContainer() {
    const [state, dispatch] = useStoreContext();

    const removeItem = id => {
        API.deleteItem(id)
          .then(() => {
            dispatch({
              type: REMOVE_ITEM,
              _id: id
            });
          })
          .catch(err => console.log(err));
      };

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
                <FormRow
                    item={item}
                    removeItem={removeItem}
                    key={index}
                />
            ))}
        </tbody>
    );
}

export default RowContainer;