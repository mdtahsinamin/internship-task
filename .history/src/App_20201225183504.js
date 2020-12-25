
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './data/DummyData.json';
import SignIn from "./Components/Authentication/SignIn";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Share/Contact/Contact";
import Editing from "./Components/Pages/Share/Editing/Editing";
import Event from "./Components/Pages/Share/Event/Event";
import Navigation from "./Components/Pages/Share/Navigation/Navigation";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
   const [loginUser,setLoginUser] = useState({
     DummyData
   });
  
  console.log(loginUser);

  return (
   <UserContext.Provider value={[loginUser,setLoginUser]}>
    <Router>
       <Switch> 
         <PrivateRoute path='/home'>
           <Home></Home>
         </PrivateRoute>

        <PrivateRoute path='/order-editing/:id'>
               <Navigation></Navigation>
               <Editing></Editing>
        </PrivateRoute>

        <Route path='/sign-in'>
              <Navigation></Navigation>
              <SignIn/>
         </Route>
         

         <Route path='/event'>
            <Navigation></Navigation>
             <Event></Event>
         </Route>


         <Route path='/contact'>
             <Navigation></Navigation>
             <Contact></Contact>
         </Route>

         <PrivateRoute exact path='/'>
             <Home></Home>
         </PrivateRoute>

       </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
