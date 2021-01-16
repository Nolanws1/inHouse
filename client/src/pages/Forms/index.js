import React from 'react'
import CreateItemForm from "../../components/CreateItemForm"
import FormTable from '../../components/FormTable';
import './style.css';

const Forms = () => {

  return (
    <div className="form-container">
      <div className="header">|</div>

      <div className="form">
        <h1>Form</h1>
        <CreateItemForm />
      </div>

      <div className="items">
        <FormTable />
      </div>
    </div>
  )
}

export default Forms;
