
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignIn from "./Components/Authentication/SignIn";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Pages/Home/Home";

export const UserContext = createContext();

function App() {
   const [loginUser,setLoginUser] = useState({

   });

  return (
   <UserContext.Provider value={[loginUser,setLoginUser]}>
    <Router>
       <Switch>
         <Route path='/home' component={Home}/>

         <Route path='/sign-in' component={SignIn}/>
         <Route exact path='/' component={Home}/>
         
       </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
