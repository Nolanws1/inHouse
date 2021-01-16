import React, { useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_INVENTORY,UPDATE_WAREHOUSE, LOADING, UPDATE_LAYOUT,UPDATE_ITEM,UPDATE_INVENTORY, SET_CURRENT_INVENTORY } from "../../utils/actions";
import API from "../../utils/API";

function UpdateInventoryForm() {
  const idInvRef = useRef();
  const warehouseRef = useRef();
  const binRef = useRef();
  const shelfRef = useRef();
 // const binLocRef = useRef();
  const itemNumRef = useRef();
  const trxQtyRef = useRef();
  const trxTypeRef = useRef();
  const [state, dispatch] = useStoreContext();

  const getWarehouses = () => {
    
    dispatch({ type: LOADING });
      API.getWarehouses()
        .then(results => {
          dispatch({
            type: UPDATE_WAREHOUSE,
            warehouses: results.data
          });
        })
        .catch(err => console.log(err));
    };
  
    const getBins = () => {
    
      dispatch({ type: LOADING });
        API.getBins()
          .then(results => {
            dispatch({
              type: UPDATE_LAYOUT,
              layouts: results.data
            });
          })
          .catch(err => console.log(err));
      };
      
      const getItems = () => {
    
        dispatch({ type: LOADING });
        API.getInventoryId().then(result=>{
          console.log(result);
          dispatch({
            type: UPDATE_INVENTORY,
            inventories: result.data
          });
        }).catch(err => console.log(err));
          API.getItems()
            .then(results => {
              dispatch({
                type: UPDATE_ITEM,
                items: results.data
              });
            })
            .catch(err => console.log(err));

            

        };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    var quantity =0;
    if(trxTypeRef.current.value=='OUT')
    {
      quantity = parseInt(trxQtyRef.current.value) * -1;
    }
    if(trxTypeRef.current.value=='IN')
    {
      quantity = parseInt(trxQtyRef.current.value);
    }

    
      console.log(state.inventories);

      API.saveInventory({
        ID: parseInt(idInvRef.current.value)+1,
        warehouseCode: warehouseRef.current.value,
        bin: binRef.current.value,
        shelfNo: shelfRef.current.value,
        binLocation: binRef.current.value + '-' + shelfRef.current.value,
        itemNumber: itemNumRef.current.value,
        qty: quantity,
        trxType: trxTypeRef.current.value,
        cratedDate: Date.now
      })
        .then(result => {
          var invs = new Array(result.data);
          dispatch({
            type: UPDATE_INVENTORY,
            inventories: invs
          });

          // dispatch({
          //   type: ADD_INVENTORY,
          //   inventories: result.data
          // });
          
          console.log(result)
        })
        .catch(err => console.log(err));
    
    //idInvRef.current.value = "";
    warehouseRef.current.value = "";
    binRef.current.value = "";
    shelfRef.current.value = "";
  //  binLocRef.current.value = "";
    itemNumRef.current.value = "";
    trxQtyRef.current.value = "";
    trxTypeRef.current.value = "";
  };

  useEffect(() => {
    getWarehouses();
    getBins();
    getItems();
  }, []);

  return (
    <div>
      <h1>Update Inventory</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        {/* <input type="hidden" ref={idInvRef} value={state.currentInventory.ID} /> */}
        {state.inventories.length > 0 && state.inventories.map(inventory => 
                <input type="hidden" ref={idInvRef} value={inventory.ID} />
                )}
        {/* <WarehouseList  ref={warehouseRef} /> */}
        <label>Warehouse</label>
        <select className="form-control mb-5" ref={warehouseRef} placeholder="Warehouse">
        {state.warehouses.length > 0 && state.warehouses.map(wh => 
                <option>{wh.warehouseCode}</option>
                )};
            </select>
        {/* <input className="form-control mb-5" ref={warehouseRef} placeholder="Warehouse Code" /> */}
        {/* <input className="form-control mb-5" ref={itemNumRef} placeholder="Item Number" /> */}
        <label>Item Number</label>
        <select className="form-control mb-5" ref={itemNumRef} placeholder="Item Number">
        {state.items.length > 0 && state.items.map(item => 
                <option>{item.itemNumber}</option>
                )};
            </select>
        {/* <input className="form-control mb-5" ref={itemNameRef} placeholder="Item Name" /> */}
        <label>Bin</label>
        <select className="form-control mb-5" ref={binRef}>
        {state.layouts.length > 0 && state.layouts.map(l => 
                <option>{l.bin}</option>
                )};
            </select>
        {/* <select className="form-control mb-5" ref={binRef} placeholder="Bin">
          <option>A1</option>
          <option>B1</option>
          <option>C1</option>
        </select> */}
        <label>Shelf</label>
        <select className="form-control mb-5" ref={shelfRef}>
        {state.layouts.length > 0 && state.layouts.map(l => 
                <option>{l.shelfNo}</option>
                )};
            </select>
        {/* <select className="form-control mb-5" ref={shelfRef} placeholder="Shelf">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> */}
        {/* <input className="form-control mb-5" ref={binLocRef} placeholder="Bin Location" /> */}
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
