import React from 'react';
import { StoreProvider } from "./utils/GlobalState";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (

    <StoreProvider>
      <h1>lets do this</h1>
    </StoreProvider>
  );
}

export default App;
