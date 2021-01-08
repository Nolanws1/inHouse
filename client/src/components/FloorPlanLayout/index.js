import React from "react";
import "./index.css";

function FloorPlanLayout() {
    return (
        <div className="wrapper">

            <header className="main-head">
                The header component goes here
            </header>

            <nav className="main-nav">
                <ul>
                    <li>Collapsible Side Nav Component</li>
                </ul>
            </nav>

            <article className="content">
                <h1>Main floor plan area</h1>
                <p>This is where the full floor plan goes</p>
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
