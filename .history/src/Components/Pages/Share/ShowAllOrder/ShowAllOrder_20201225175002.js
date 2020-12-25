import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
const ShowAllOrder = ({currentOrders}) => {

    const styles ={
        border: '1px solid gray'
    };

    return (
        currentOrders.map((currentOrder,index) =>
            <div style={styles}className='col-md-3 mt-5'>
             <h5>Name : {currentOrder.customer_name}</h5>
             <p>Email: {currentOrder.customer_email}</p>
             <div className='d-flex'>
                <h6>Product :{currentOrder.product}</h6>
                <h6 className='ml-1'>Quantity :{currentOrder.quantity}</h6>
             </div>
            <Link to={`/order-editing/${currentOrder.id} ${index}`}>
              <Button variant="contained" color="primary">Edit</Button>
            </Link>
         </div>
        )
    );
};

export default ShowAllOrder;
