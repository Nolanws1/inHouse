import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_BINQTY } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";
import FloorplanDiagram from "../../components/FloorplanDiagram";
import FloorTable from '../../components/FloorTable';
import { useAuth0 } from '@auth0/auth0-react';

function FloorPlanLayout() {
    const [state, dispatch] = useStoreContext();
    const [bins, setBins] = useState();
    const [currentItem, setCurrentItem] = useState({
        currentItemName: "",
        currentItemNumber: "",
        //currentMessage: `Click an item in the list to display quantities.`
    });
    const [currentMsg, setCurrentMsg] = useState(`Click an item in the list to display quantities.`);
    const { isAuthenticated } = useAuth0();
    var quantities = state.binQuantities;

    useEffect(() => {
        getBinQuantities();
        hasQty(bins, currentItem);
    }, [currentItem]);

    const getBinQuantities = () => {
        API.getBinQuantities()
            .then(results => {
                dispatch({
                    type: UPDATE_BINQTY,
                    binQuantities: results.data
                });
            })
            .catch(err => console.log(err));
    };

    function handleClick(e) {
        e.preventDefault();
        const itemNumber = e.target.getAttribute("data-number");
        const itemName = e.target.getAttribute("data-name");
        setCurrentItem({
            currentItemName: itemName,
            currentItemNumber: itemNumber,
            //currentMessage: `Click an item in the list to display quantities.`
        });
        //const message = hasQty(bins, currentItem);
        //setCurrentMsg(message);
        hasQty(bins, currentItem);


        var result = findQty(itemNumber, quantities);
        updateBins(result);
    }

    function hasQty(allBins, targetItem) {
        if (allBins) {
            //Should return true if allBins has no qtys
            const isEmpty = !Object.values(allBins).some(
                (x) => x !== null && x !== "" && x !== undefined
            );
            if (isEmpty) {
                //Should briefly recolor text to indicate that it has changed user input when they click multiple 'out of stock' items in a row
                return setCurrentMsg(`That item is out of stock.`);
            } else {
                return setCurrentMsg(`${targetItem.currentItemName} (${targetItem.currentItemNumber})`);
            }
        } else {
            return setCurrentMsg(`Click an item in the list to display quantities.`);
        }
    }

    function updateBins(arr) {
        var binQtys = {
            A1: "",
            B1: "",
            A2: "",
            B2: "",
            B3: "",
            B4: "",
            C1: "",
            C2: "",
            C3: "",
            C4: "",
            D1: "",
            D2: ""
        };

        arr.forEach((item) => {
            if (binQtys.hasOwnProperty(item.bin)) {
                binQtys[item.bin] = item.binQty;
            }
            return setBins(binQtys);
        });
        return setBins(binQtys);
    }

    //Returns a new array that consists only of items whose itemNumber matches the targeted itemNumber from the click event
    function findQty(itemNumber, items) {
        var targetedNumber = items.filter((item) => item.itemNumber === itemNumber);
        return targetedNumber;
    }

    return (
        isAuthenticated && (
            <div className="wrapper">

                <header className="main-head">
                    {/* <h2>{currentItem ? `${currentItem.currentItemName} (${currentItem.currentItemNumber})` : "No quantities for that item found."}</h2> */}

                    {/* Only works on double click */}
                    <h2>{currentMsg} </h2>
                    {/* <h2>{currentItem ? currentItem.currentMessage : `Click an item in the list to display the quantities.`}</h2> */}
                </header>

                <article className="content">
                    <FloorplanDiagram bins={bins} />
                </article>

                <aside className="side">
                    <FloorTable handleClick={handleClick} />
                </aside>

            </div>
        )
    );
}

export default FloorPlanLayout;
