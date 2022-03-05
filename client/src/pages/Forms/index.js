import React from 'react'
import FormTable from '../../components/FormTable';
import './style.css';
import FormTab from '../../components/FormTab'

const Forms = () => {

  return (
      <div className="form-container">
        <div className="dash-header">Header</div>

        <div className="form">
          <FormTab />
        </div>

        <div className="items">
          <FormTable />
        </div>
      </div>
  )
}

export default Forms;
