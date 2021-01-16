import React from 'react'
import CreateItemForm from "../../components/CreateItemForm"
import UpdateInventoryForm from "../../components/UpdateInventoryForm"
import InventoryList from '../../components/InventoryList';
import FormTable from '../../components/FormTable';
import './style.css';

const Forms = () => {

  return (
    <div className="form-container">
      <div className="header">Header</div>

      <div className="form">
        <h1>Form</h1>
        <CreateItemForm />
        <UpdateInventoryForm />
      </div>

      <div className="items">
        <FormTable />
      </div>

      <footer className="main-footer">
        The footer
            </footer>
    </div>
  )
}

export default Forms;
