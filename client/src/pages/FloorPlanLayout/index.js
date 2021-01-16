import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_BINQTY } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";
import FloorplanDiagram from "../../components/FloorplanDiagram";
import FloorTable from '../../components/FloorTable';

function FloorPlanLayout() {
    const [state, dispatch] = useStoreContext();

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

    useEffect(() => {
        getBinQuantities();
    }, []);

    const quantities = state.binQuantities;
    console.log(quantities);

    return (
        <div className="wrapper">

            <header className="main-head">
                The header component goes here
            </header>

            <article className="content">
                <FloorplanDiagram />
                {/* Needs to receive props grabbed from down in FloorRow */}
            </article>

            <aside className="side">
                <FloorTable />
                {/* Children are FloorHeading, FloorContainer/FloorRow */}
            </aside>

            <footer className="main-footer">
                The footer
            </footer>
        </div>
    );
}

export default FloorPlanLayout;
