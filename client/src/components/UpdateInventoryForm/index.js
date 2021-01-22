import React, { useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_INVENTORY, UPDATE_WAREHOUSE, LOADING, UPDATE_LAYOUT, UPDATE_ITEM, UPDATE_INVENTORY, UPDATE_BINQTY, DD_WAREHOUSE, DD_BIN, DD_SHELF } from "../../utils/actions";
import API from "../../utils/API";

function UpdateInventoryForm() {
  // const idInvRef = useRef();
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
        var i;
        var uniqueArray = [];
        var uniqueArrayShelf = [];
        for (i = 0; i < results.data.length; i++) {
          if (uniqueArray.indexOf(results.data[i].warehouseCode) === -1) {
            uniqueArray.push(results.data[i].warehouseCode);
          }
          if (uniqueArrayShelf.indexOf(results.data[i].shelfNo) === -1) {
            uniqueArrayShelf.push(results.data[i].shelfNo);
          }
        }
        dispatch({
          type: DD_WAREHOUSE,
          ddWarehouse: uniqueArray
        });

        dispatch({
          type: DD_SHELF,
          ddShelf: uniqueArrayShelf
        });
      })
      .catch(err => console.log(err));
  };

  const getBins = () => {

    dispatch({ type: LOADING });
    API.getBins()
      .then(results => {
        var i;
        var uniqueArray = [];
        for (i = 0; i < results.data.length; i++) {
          if (uniqueArray.indexOf(results.data[i].bin) === -1) {
            uniqueArray.push(results.data[i].bin);
          }
        }
        dispatch({
          type: DD_BIN,
          ddBin: uniqueArray
        });
      })
      .catch(err => console.log(err));
  };

  const getItems = () => {

    dispatch({ type: LOADING });
    // API.getInventoryId().then(result=>{
    //   console.log(result);
    //   dispatch({
    //     type: UPDATE_INVENTORY,
    //     inventories: result.data
    //   });
    // }).catch(err => console.log(err));
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
    var quantity = 0;
    var binNum = binRef.current.value;
    var itemNum = itemNumRef.current.value;
    var updateSkipped = false;

    if (trxTypeRef.current.value == 'OUT') {
      quantity = parseInt(trxQtyRef.current.value) * -1;
    }
    if (trxTypeRef.current.value == 'IN') {
      quantity = parseInt(trxQtyRef.current.value);
    }

    // check if there is any existing binQty record 
    API.getBinQuantities()
      .then(results => {
        var bins = results.data;
        var i;
        var inserted = false;
        for (i = 0; i < bins.length; i++) {
          // if exists, run update
          if (bins[i].bin == binNum && bins[i].itemNumber == itemNum) {
            let updatedBinQty = parseInt(bins[i].binQty) + quantity;

            // if binQty will be less than 1, skip update
            if (updatedBinQty > 0) {
              API.updateBinQuantity(bins[i]._id, {
                warehouseCode: "CA",
                bin: binNum,
                itemNumber: itemNum,
                binQty: updatedBinQty,
                modifiedDate: Date.now
              }).then(results => {
                console.log(results);

              })
                .catch(err => console.log(err));
              inserted = true;
            } else {
              updateSkipped = true;
            }
          }
        }

        // if record not found and update not skipped, create binQty record
        if(!inserted && !updateSkipped)
        {
          console.log(binNum);
          console.log(itemNum);
          console.log(quantity);

        // if saving item qty is less than 0, skip creating binQty record
        if (quantity > 0) {
          API.saveBinQuantity({
            warehouseCode: "CA",
              bin: binNum,
              itemNumber: itemNum,
              binQty: quantity,
              modifiedDate: Date.now
          }).then(results => {
            console.log(results);
            
          })
          .catch(err => console.log(err));
        } else {
          updateSkipped = true;
        }
      }

      console.log("Update Skipped: " + updateSkipped);
      if (!updateSkipped) {
        //Add inventory transaction history to inventory table
        API.saveInventory({
          // ID: parseInt(idInvRef.current.value)+1,
          ID: 1,
          // warehouseCode: warehouseRef.current.value,
          warehouseCode: "CA",
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
        
        //Update item Qty on item table
        let currentItem = state.items.find(item => item.itemNumber === itemNum);
        let updatedQty = currentItem.qty + quantity;
  
        API.updateItem(currentItem._id,{
          qty: updatedQty
        }).then(results => {
          let updatedItemList = state.items.map(item => {
            if (item.itemNumber === itemNum){
              item.qty = updatedQty;
            }
            return item;
          });
  
          dispatch({
            type: UPDATE_ITEM,
            items: updatedItemList
          });
        })
  
        // idInvRef.current.value = "";
        warehouseRef.current.value = "";
        binRef.current.value = "";
        shelfRef.current.value = "";
        //  binLocRef.current.value = "";
        itemNumRef.current.value = "";
        trxQtyRef.current.value = "";
        trxTypeRef.current.value = "";
      }
      else {
        alert("BinQty cannot be lower than 1")
      }
    })
    .catch(err => console.log(err));

  };


  useEffect(() => {
    getWarehouses();
    getBins();
    getItems();
  }, []);

  return (
    <div>
      <h2>Update Inventory</h2>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <label>Warehouse</label>
        <select className="form-control mb-5" ref={warehouseRef} placeholder="Warehouse">
          {state.ddWarehouse.length > 0 && state.ddWarehouse.map(wh =>
            <option>{wh}</option>
          )};
            </select>
        <label>Item Number</label>
        <select className="form-control mb-5" ref={itemNumRef} placeholder="Item Number">
          {state.items.length > 0 && state.items.map(item =>
            <option>{item.itemNumber}</option>
          )};
            </select>
        {/* <input className="form-control mb-5" ref={itemNameRef} placeholder="Item Name" /> */}
        <label>Bin</label>
        <select className="form-control mb-5" ref={binRef}>
          {state.ddBin.length > 0 && state.ddBin.map(bin =>
            <option>{bin}</option>
          )};
            </select>
        <label>Shelf</label>
        <select className="form-control mb-5" ref={shelfRef}>
          {state.ddShelf.length > 0 && state.ddShelf.map(shelfNo =>
            <option>{shelfNo}</option>
          )};
            </select>
        <select className="form-control mb-5" ref={trxTypeRef} placeholder="Trx Type">
          <option>IN</option>
          <option>OUT</option>
        </select>
        <input type="number" min="0" className="form-control mb-5" ref={trxQtyRef} placeholder="Quantity" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Update
          </button>
      </form>
    </div>
  );
}

export default UpdateInventoryForm;
