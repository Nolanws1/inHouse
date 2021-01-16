import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_INVENTORY, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function UpdateInventoryForm() {
  const idInvRef = useRef();
  const warehouseRef = useRef();
  const binRef = useRef();
  const shelfRef = useRef();
  const binLocRef = useRef();
  const itemNumRef = useRef();
  const trxQtyRef = useRef();
  const trxTypeRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveInventory({
      ID: idInvRef.current.value,
      warehouseCode: warehouseRef.current.value,
      bin: binRef.current.value,
      shelfNo: shelfRef.current.value,
      binLocation: binLocRef.current.value,
      itemNumber: itemNumRef.current.value,
      qty: trxQtyRef.current.value,
      trxType: trxTypeRef.current.value,
      cratedDate: Date.now
    })
      .then(result => {
        dispatch({
          type: ADD_INVENTORY,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    idInvRef.current.value = "";
    warehouseRef.current.value = "";
    binRef.current.value = "";
    shelfRef.current.value = "";
    binLocRef.current.value = "";
    itemNumRef.current.value = "";
    trxQtyRef.current.value = "";
    trxTypeRef.current.value = "";
  };

  return (
    <div>
      <h1>Update Inventory</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" ref={idInvRef} placeholder="ID" />
        <input className="form-control mb-5" ref={warehouseRef} placeholder="Warehouse Code" />
        <input className="form-control mb-5" ref={itemNumRef} placeholder="Item Number" />
        {/* <input className="form-control mb-5" ref={itemNameRef} placeholder="Item Name" /> */}
        <select className="form-control mb-5" ref={binRef} placeholder="Bin">
          <option>A1</option>
          <option>B1</option>
          <option>C1</option>
        </select>
        <select className="form-control mb-5" ref={shelfRef} placeholder="Shelf">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input className="form-control mb-5" ref={binLocRef} placeholder="Bin Location" />
        <select className="form-control mb-5" ref={trxTypeRef} placeholder="Trx Type">
          <option>IN</option>
          <option>OUT</option>
        </select>
        <input type="number" className="form-control mb-5" ref={trxQtyRef} placeholder="Quantity" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Update Inventory
          </button>
      </form>
    </div>
  );
}

export default UpdateInventoryForm;
