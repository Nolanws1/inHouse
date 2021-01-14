import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_ITEM, UPDATE_ITEM, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function ItemsList() {
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
    <div>
      <h1>All Items</h1>
      <h3 className="mb-5 mt-5">Click on a item to view</h3>
      {state.items.length ? (
        <List>
          {state.items.length > 0 && state.items.map(item => (
            <ListItem key={item!= undefined && item._id}>
              <Link to={"/items/" + (item!= undefined && item._id)}>
                <strong>
                  {item!= undefined && item.itemNumber} by {item!= undefined && item.ItemName}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeItem(item!= undefined && item._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any items yet!</h3>
      )}
      {/* <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div> */}
    </div>
  );
}

export default ItemsList;
