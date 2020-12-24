import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Navigation from '../Share/Navigation/Navigation';
import jwt_decode from "jwt-decode";
import businessOrders from '../../../data/DummyData.json';
import ShowAllOrder from '../Share/ShowAllOrder/ShowAllOrder';
import Pagination from '../Share/Pagination/Pagination';
const Home = () => {
     // state hooks
    const [orders,setOrder] = useState(businessOrders);
    const [currentPage,setCurrentPage] = useState(1);
    const [orderPerPage,setOrderPerPage] = useState(10);

    // context-api
    const [loginUser,setLoginUser] = useContext(UserContext);

    const token = sessionStorage.getItem('token');
       if(token){
           const decodedToken = jwt_decode(token);
           loginUser.currentName = decodedToken.name;
           loginUser.currentEmail = decodedToken.email;
           loginUser.currentPhotoUrl = decodedToken.picture;
           setLoginUser(loginUser);
       }

       // pagination
       const indexOfLastOrder = currentPage*orderPerPage;
       const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
       const currentOrders = orders.slice(indexOfFirstOrder,indexOfLastOrder)





    return (
        <div>
            <Navigation></Navigation>
             <div className="container">
                 <div className="row">
                 <ShowAllOrder currentOrders={currentOrders}></ShowAllOrder>
                 </div>
                
             </div>
        </div>
    );
};

export default Home;

/*  <Pagination postPerPage={postPerPage} totalPosts={totalPosts}/>*/