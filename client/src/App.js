import React from 'react';
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import NavTabs from "./components/NavTabs";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import FloorPlanLayout from "./pages/FloorPlanLayout";
import Forms from "./pages/Forms";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
<<<<<<< HEAD

=======
import './App.css';
>>>>>>> 30e5af81b777b40275d6c6f1c94d015d9f420d2a

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <Loading />

  return (
    < StoreProvider>
    <Router>
      <div className="background">
        <LoginButton />
        <Sidebar />
        <NavTabs />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/floorplan" exact component={FloorPlanLayout} />
          <Route path="/forms" exact component={Forms} />
        </Switch>
<<<<<<< HEAD
        <Footer/>
=======
        <Footer />
>>>>>>> 30e5af81b777b40275d6c6f1c94d015d9f420d2a
      </div>
    </Router>
    </StoreProvider>
  );
}

export default App;

