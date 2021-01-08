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
