import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_ITEM, UPDATE_BINQTY, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";
import FloorplanDiagram from "../../components/FloorplanDiagram";
import FloorTable from '../../components/FloorTable';


//FloorTable, would have a function sent down as props, that triggers down there (selecting an item) 
//but state is managed up here, so I can then send the response down into FloorplanDiagram to render the binQtities1


function FloorPlanLayout() {
    // const [quantities, setQuantities] = useState();
    const [state, dispatch] = useStoreContext();

    const getBinQuantities = () => {
        dispatch({ type: LOADING });
        API.getBinQuantities()
            .then(results => {
                dispatch({
                    type: UPDATE_BINQTY,
                    binQuantities: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getBinQuantities();
    }, []);

    const quantities = state.binQuantities;
    console.log(quantities);

    function itemQty(itemNumber, items) {
        let binQuantities = [
            { A1: 0 },
            { A2: 0 },
            { B1: 0 },
            { B2: 0 },
            { B3: 0 },
            { B4: 0 },
            { C1: 0 },
            { C2: 0 },
            { C3: 0 },
            { C4: 0 },
            { D1: 0 },
            { D2: 0 },
        ];
        for (var i = 0; i < items.length; i++) {
            if (items[i].itemNumber === itemNumber) {
                for (var j = 0; i < items.length; i++) {
                    switch (items[j].bin) {
                        case "A1":
                            binQuantities.A1 = items[j].binQty;
                            break;
                        default:
                        //some default
                    }
                }
            }
        }
    }

    return (
        <div className="wrapper">

            <header className="main-head">
                The header component goes here
            </header>

            <article className="content">
                <FloorplanDiagram />
            </article>

            <aside className="side">
                <FloorTable />
            </aside>

            <footer className="main-footer">
                The footer
            </footer>
        </div>
    );
}

export default FloorPlanLayout;
