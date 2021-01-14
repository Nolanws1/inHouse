import React from 'react'
import "./style.css";
import CreateItemForm from "../../components/CreateItemForm"
import ItemList from "../../components/ItemList";
import { useAuth0 } from '@auth0/auth0-react';

const Forms = () => {
  const { isAuthenticated } = useAuth0();

    return (
      isAuthenticated && (
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
    )
}

export default Forms;
