import React, { useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_INVENTORY,UPDATE_WAREHOUSE, LOADING, UPDATE_LAYOUT,UPDATE_ITEM,UPDATE_INVENTORY, UPDATE_BINQTY, DD_WAREHOUSE, DD_BIN,DD_SHELF } from "../../utils/actions";
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
          for(i=0; i < results.data.length; i++){
              if(uniqueArray.indexOf(results.data[i].warehouseCode) === -1) {
                  uniqueArray.push(results.data[i].warehouseCode);
              }
              if(uniqueArrayShelf.indexOf(results.data[i].shelfNo) === -1) {
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
        for(i=0; i < results.data.length; i++){
            if(uniqueArray.indexOf(results.data[i].bin) === -1) {
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
    var quantity =0;
    var binNum = binRef.current.value;
    var itemNum = itemNumRef.current.value;
    if(trxTypeRef.current.value=='OUT')
    {
      quantity = parseInt(trxQtyRef.current.value) * -1;
    }
    if(trxTypeRef.current.value=='IN')
    {
      quantity = parseInt(trxQtyRef.current.value);
    }

      // check if there is any existing binQty record 
      API.getBinQuantities()
      .then(results => {
        var bins = results.data;
        var i;
        var inserted=false;
        for (i = 0; i < bins.length; i++) {
         // if exists, run update
          if(bins[i].bin==binNum && bins[i].itemNumber==itemNum)
          {
            API.updateBinQuantity(bins[i]._id,{
              warehouseCode: "CA",
              bin: binNum,
              itemNumber: itemNum,
              binQty: parseInt(bins[i].binQty) + quantity,
              modifiedDate: Date.now
            }).then(results => {
              console.log(results);
              
            })
            .catch(err => console.log(err));
            inserted=true;
          }
        }

        // if record not found, create binQty record
        if(!inserted)
        {
          console.log(binNum);
          console.log(itemNum);
          console.log(quantity);

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
        }

      })
      .catch(err => console.log(err));

      //Add inventory transaction history to inventory table
      API.saveInventory({
        // ID: trxId,
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
    
    // idInvRef.current.value = "";
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
        {/* <input className="form-control mb-5" ref={idInvRef} placeholder="ID" /> */}
        {/* {state.inventories.length > 0 && state.inventories.map(inventory => 
                <input type="hidden" ref={idInvRef} value={inventory.ID} />
                )} */}
        {/* <WarehouseList  ref={warehouseRef} /> */}
        <label>Warehouse</label>
        <select className="form-control mb-5" ref={warehouseRef} placeholder="Warehouse">
        {state.ddWarehouse.length > 0 && state.ddWarehouse.map(wh => 
                <option>{wh}</option>
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
        {state.ddBin.length > 0 && state.ddBin.map(bin => 
                <option>{bin}</option>
                )};
            </select>
        {/* <select className="form-control mb-5" ref={binRef} placeholder="Bin">
          <option>A1</option>
          <option>B1</option>
          <option>C1</option>
        </select> */}
        <label>Shelf</label>
        <select className="form-control mb-5" ref={shelfRef}>
        {state.ddShelf.length > 0 && state.ddShelf.map(shelfNo => 
                <option>{shelfNo}</option>
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
