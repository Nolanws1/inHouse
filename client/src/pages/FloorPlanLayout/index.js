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
            //currentMessage: integrate currentMsg state here instead of as separate state. 
        });
        //Sets the message to show currently displaying item or "out of stock"
        hasQty(bins, currentItem);

        //Handles bin qtys for targeted item
        var result = findQty(itemNumber, quantities);
        updateBins(result);
    }

    //Could relocate this inside of currentItem state as a custom validator
    function hasQty(allBins, targetItem) {
        const msgId = document.getElementById("message");
        msgId.style.color = "black";
        if (allBins) {
            //Returns true if allBins has no qtys
            const isEmpty = !Object.values(allBins).some(
                (x) => x !== null && x !== "" && x !== undefined
            );
            if (isEmpty) {
                msgId.style.color = "#d1231d";
                setTimeout(() => { msgId.style.color = "black" }, 400);
                return setCurrentMsg(`That item is out of stock.`);
            } else {
                return setCurrentMsg(`${targetItem.currentItemName} (${targetItem.currentItemNumber})`);
            }
        } else {
            return setCurrentMsg(`Click an item in the list to display quantities.`);
        }
    }

    //Updates bin quantities for a single, targeted item
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
            <div className="floorplan-container">

                <header className="main-head">
                    <h2 id="message">{currentMsg}</h2>
                </header>

                <div className="content">
                    <FloorplanDiagram bins={bins} />
                </div>

                <div className="side">
                    <FloorTable handleClick={handleClick} />
                </div>

            </div>
        )
    );
}

export default FloorPlanLayout;
