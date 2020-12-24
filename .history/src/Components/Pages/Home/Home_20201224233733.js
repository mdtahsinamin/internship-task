import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Navigation from '../Share/Navigation/Navigation';
import jwt_decode from "jwt-decode";
import businessOrders from '../../../../data/DummyData.json';
import ShowAllOrder from '../Share/ShowAllOrder/ShowAllOrder';
const Home = () => {
    const [orders,setOrder] = useState(businessOrders);

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
             <div className="container">
                 <div className="row">
                 {
                  orders.map(order =>
                   <ShowAllOrder order={order} key={order.id}></ShowAllOrder>)
                  }
                 </div>
             </div>
        </div>
    );
};

export default Home;