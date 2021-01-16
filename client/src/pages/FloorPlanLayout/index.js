import React, { useState } from "react";
import "./style.css";
import FloorplanDiagram from "../../components/FloorplanDiagram";
import FloorTable from '../../components/FloorTable';
import { useAuth0 } from '@auth0/auth0-react';

// This array is for testing sending props down to diagram
const seedQuantities = {
    A1: {
        itemName: "lamp",
        qty: 10,
        binLocation: "A1"
    },
    A2: {
        itemName: "lamp",
        qty: 20,
        binLocation: "A2"
    },
    B1: {
        itemName: "lamp",
        qty: 30,
        binLocation: "B1"
    },
    B2: {
        itemName: "lamp",
        qty: 40,
        binLocation: "B2"
    },
    B3: {
        itemName: "lamp",
        qty: 50,
        binLocation: "B3"
    },
    B4: {
        itemName: "lamp",
        qty: 1,
        binLocation: "B4"
    },
    C1: {
        itemName: "lamp",
        qty: 10,
        binLocation: "C1"
    },
    C2: {
        itemName: "lamp",
        qty: 0,
        binLocation: "C2"
    },
    C3: {
        itemName: "lamp",
        qty: 0,
        binLocation: "C3"
    },
    C4: {
        itemName: "lamp",
        qty: 100,
        binLocation: "C4"
    },
    D1: {
        itemName: "lamp",
        qty: 200,
        binLocation: "D1"
    },
    D2: {
        itemName: "lamp",
        qty: 7000,
        binLocation: "D2"
    }
};

function FloorPlanLayout() {
    const [quantities, setQuantities] = useState(seedQuantities);
    const { isAuthenticated } = useAuth0();

    return (
      isAuthenticated && (
        <div className="wrapper">

            <header className="main-head">
                The header component goes here
            </header>

            <article className="content">
                <FloorplanDiagram quantities={quantities} />
            </article>

            <aside className="side">
                <FloorTable />
            </aside>

            <footer className="main-footer">
                The footer
            </footer>
        </div>
      )
    );
}

export default FloorPlanLayout;
