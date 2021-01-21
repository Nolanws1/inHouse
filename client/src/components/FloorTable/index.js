import React, { useState, useEffect } from 'react';
import FloorHeading from "./FloorHeading";
import FloorContainer from "./FloorContainer";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_ITEM } from "../../utils/actions";

const FloorTable = ({ handleClick }) => {
  const [state, dispatch] = useStoreContext();
  const [sortedItems, setSortedItems] = useState(state.items);

  //it works properly when you go to the Floorplan view AFTER visiting another page first but not on initial render

  useEffect(() => {
    getItems();
  }, [sortedItems]);

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

  function sortItems(array, criteria) {
    const sorted = [].concat(array)
      .sort((a, b) => a[criteria] > b[criteria] ? 1 : -1);
    return sorted;
  }

  function handleSort(e) {
    e.preventDefault();
    const btn = e.target.getAttribute("data-value");
    switch (btn) {
      case "itemNumber":
        var sortedNumber = sortItems(sortedItems, "itemNumber");
        setSortedItems(sortedNumber);
        break;
      case "itemName":
        var sortedName = sortItems(sortedItems, "itemName");
        setSortedItems(sortedName);
        break;
      default:
        return setSortedItems(state.items);
    }
  }

  return (
    <table className="table color2 table-hover">
      <FloorHeading handleSort={handleSort} />
      <FloorContainer items={sortedItems.length != null && sortedItems.length > 0 ? sortedItems : state.items} handleClick={handleClick} />
    </table>
  );
}

export default FloorTable;