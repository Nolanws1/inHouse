import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_INVENTORY, UPDATE_INVENTORY, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

function InventoryList() {
  const [state, dispatch] = useStoreContext();
  const { isAuthenticated } = useAuth0();

  const removeInventory = id => {
    API.deleteInventory(id)
      .then(() => {
        dispatch({
          type: REMOVE_INVENTORY,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getInventories = () => {
    dispatch({ type: LOADING });
    API.getInventories()
      .then(results => {
        dispatch({
          type: UPDATE_INVENTORY,
          inventories: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getInventories();
  }, []);

  return (
    // isAuthenticated && (
      <div>
        <h1>All Items</h1>
        <h3 className="mb-5 mt-5">Click on a item to view</h3>
        {state.inventories.length ? (
          <List>
            {state.inventories.length > 0 && state.inventories.map(item => (
              <ListItem key={item!= undefined && item._id}>
                <Link to={"/items/" + (item!= undefined && item._id)}>
                  <strong>
                    {item!= undefined && item.binLocation} Item: {item!= undefined && item.itemNumber} Qty: {item!= undefined && item.qty} ({item!= undefined && item.trxType})
                  </strong>
                </Link>
                <DeleteBtn onClick={() => removeInventory(item!= undefined && item._id)} />
              </ListItem>
            ))}
          </List>
         ) : (
          <h3>You haven't added any inventories yet!</h3>
        )} 
        {/* <div className="mt-5">
          <Link to="favorites">View favorites</Link>
        </div> */}
      </div>
    //)
  );
}

export default InventoryList;