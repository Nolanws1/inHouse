import React from "react";
import "./style.css";
import FloorplanDiagram from "../../components/FloorplanDiagram";

function FloorPlanLayout() {
    return (
        <div className="wrapper">

            <header className="main-head">
                The header component goes here
            </header>

            {/* <nav className="main-nav">
                <ul>
                    <li>Collapsible Side Nav Component</li>
                </ul>
            </nav> */}

            <article className="content">
                <FloorplanDiagram />
            </article>

            <aside className="side">
                Sidebar Search
            </aside>

            <div className="ad">
                Sidebar Bin
            </div>

            <footer className="main-footer">
                The footer
            </footer>
        </div>
    );
}

export default FloorPlanLayout;
