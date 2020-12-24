import React, { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { UserContext } from '../../App';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ children, ...rest }) => {
    const [loginUser,setLoginUser] = useContext(UserContext);

    const isLoggedIn = () =>{
        const token = sessionStorage.getItem('token');
        if(!token){
         return false;
       }
       const decodedToken = jwt_decode(token);
       
       const currentTime = new Date().getTime() / 1000;
 
       return (decodedToken.exp > currentTime);
     }
     
     const token = sessionStorage.getItem('token');
       if(token){
           const decodedToken = jwt_decode(token);
           loginUser.currentName = decodedToken.name;
           loginUser.currentEmail = decodedToken.email;
           loginUser.currentPhotoUrl = decodedToken.picture;
           setLoginUser(loginUser);
       }

    return (
        <Route
        {...rest}
        render={({ location }) =>
          ((loginUser.email||loginUser.currentEmail)||isLoggedIn())? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;