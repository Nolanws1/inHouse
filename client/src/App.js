import React from 'react';
import { StoreProvider } from "./utils/GlobalState";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FloorPlanLayout from "./components/FloorPlanLayout";

function App() {
  return (

    <StoreProvider>
      <FloorPlanLayout />
    </StoreProvider>
  );
}

export default App;
