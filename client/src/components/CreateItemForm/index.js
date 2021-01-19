import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_ITEM, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";

function CreateItemForm() {
  const itemNumRef = useRef();
  const itemNameRef = useRef();
  const catRef = useRef();
  // const qtyRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveItem({
      itemNumber: itemNumRef.current.value,
      itemName: itemNameRef.current.value,
      category: catRef.current.value,
      qty: 0
    })
      .then(result => {
        dispatch({
          type: ADD_ITEM,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    itemNumRef.current.value = "";
    itemNameRef.current.value = "";
    catRef.current.value = "";
    // qtyRef.current.value = "";
  };

  return (
    <div>
      <h2>Insert Item</h2>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" ref={itemNumRef} placeholder="Item #" />
        <input className="form-control mb-5" ref={itemNameRef} placeholder="Name" />
        <input className="form-control mb-5" ref={catRef} placeholder="Category" />
        {/* <input type="number" className="form-control mb-5" ref={qtyRef} placeholder="Quantity" /> */}
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Insert
          </button>
      </form>
    </div>
  );
}

export default CreateItemForm;
