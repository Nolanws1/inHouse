import React from 'react';
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import FloorPlanLayout from "./pages/FloorPlanLayout";
import Forms from "./pages/Forms";
import Footer from "./components/Footer";
import './App.css';

function App() {
  
  return (
    < StoreProvider>
    <Router>
      <div className="background">
        <Sidebar />
        <NavTabs />
        <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/floorplan" exact component={FloorPlanLayout} />
        <Route path="/forms" exact component={Forms} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </StoreProvider>
  );
}

export default App;



