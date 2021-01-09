import React from 'react';
<<<<<<< HEAD
import { StoreProvider } from "./utils/GlobalState";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FloorPlanLayout from "./components/pages/FloorPlanLayout";
import NavTabs from "./components/NavTabs";
import Dashboard from "./components/pages/Dashboard";
import { Router } from 'express';
import { Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/floorplan" component={FloorPlanLayout} />
      </div>
    </Router>
=======
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
import Dashboard from "./pages/Dashboard/index";

// import { StoreProvider } from "./utils/GlobalState";
// import FloorPlanLayout from "./components/FloorPlanLayout";

function App() {
  return (
    <div>
      <Router>
      <Sidebar />
      </Router>
      <Dashboard />
    </div>
>>>>>>> 69e347424b057db9057f216ad9873ba4070c8e0b
  );
}

export default App;


//Below is the code for user authentication --------------------------------------

// import React from 'react';
// import LoginButton from './components/LoginButton/LoginButton';
// import LogoutButton from './components/LogoutButton/LogoutButton';
// import Profile from './components/Profile/Profile';
// import { useAuth0 } from '@auth0/auth0-react'; 


// function App() {
//   const { isLoading } = useAuth0();

//   if (isLoading) return <div> Loading... </div>

//   return (
//     <>
//     <LoginButton />
//     <LogoutButton />
//     <Profile />
//     </>
//   );
// }

// export default App;
