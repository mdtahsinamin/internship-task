import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Navigation from '../Share/Navigation/Navigation';
import jwt_decode from "jwt-decode";
import businessOrders from '../../../data/DummyData.json';
import ShowAllOrder from '../Share/ShowAllOrder/ShowAllOrder';
import Pagination from '../Share/Pagination/Pagination';
import { Dropdown } from 'react-bootstrap';
import {FaOpencart} from 'react-icons/fa';
import { dummyArray } from '../../../data/DummyData';
const Home = () => {
     // state hooks
    const [orders,setOrder] = useState(dummyArray);
    const [currentPage,setCurrentPage] = useState(1);
    const [orderPerPage,setOrderPerPage] = useState(50);

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

       const paginate = (pageNumber) =>{
          setCurrentPage(pageNumber)
        }
        
    return (
        <div>
            <Navigation></Navigation>
            <div className='ml-5 pt-5'>
              <Dropdown>
                    <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                    <span style={{fontSize:'20px',marginRight:'10px'}}><FaOpencart/></span>
                    <span className="badge badge-light">{orders.length}</span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
             <div className="container">
                 <div className="row">
                 <ShowAllOrder currentOrders={currentOrders}></ShowAllOrder>
                 </div>
                 <Pagination postPerPage={orderPerPage} totalPosts={orders.length} paginate={paginate}/>
             </div>
        </div>
    );
};

export default Home;
