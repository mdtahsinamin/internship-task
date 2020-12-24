import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Navigation from '../Share/Navigation/Navigation';
import jwt_decode from "jwt-decode";
const Home = () => {
    

    const [loginUser,setLoginUser] = useContext(UserContext);
    const token = sessionStorage.getItem('token');
       if(token){
           const decodedToken = jwt_decode(token);
           loginUser.currentName = decodedToken.name;
           loginUser.currentEmail = decodedToken.email;
           loginUser.currentPhotoUrl = decodedToken.picture;
           setLoginUser(loginUser);
       }

    return (
        <div>
            <Navigation></Navigation>
        </div>
    );
};

export default Home;