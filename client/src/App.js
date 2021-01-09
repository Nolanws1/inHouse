import React from 'react';
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
