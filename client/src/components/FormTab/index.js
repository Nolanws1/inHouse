import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import CreateItemForm from '../CreateItemForm';
import './style.css';

const FormTab = () => {
    return(
        <Tabs defaultActiveKey="Insert" transition={false} id="noanim-tab-example" className="tabs-background">
        <Tab eventKey="Insert" title="Insert" className="single-tab">
          <CreateItemForm />
        </Tab>
        <Tab eventKey="Update" title="Update">
        </Tab>
      </Tabs> 
    ) 
}

export default FormTab;