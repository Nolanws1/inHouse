import React from 'react'
import "./style.css";
import CreateItemForm from "../../components/CreateItemForm"
import ItemList from "../../components/ItemList";

const Forms = () => {
    return (
    <div className="form-container">
            <div className="header">Header</div>
            
            
            <div className="form">
                <h1>Form</h1>
                <CreateItemForm />
            </div>

            <div className="items">
                <h1>Items</h1>
                <ItemList />
            </div>

            <footer className="main-footer">
                The footer
            </footer>
            

    </div>
    )
}

export default Forms;
