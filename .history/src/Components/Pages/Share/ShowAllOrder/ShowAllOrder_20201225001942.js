import React from 'react';
import Button from '@material-ui/core/Button';
const ShowAllOrder = ({currentOrders}) => {

    const styles ={
        border: '1px solid gray'
    };

    return (
        currentOrders.map(currentOrder=>
             <div style={styles}className='col-md-3 mt-5'>
             <h5>Name : {currentOrder.customer_name}</h5>
             <p>Email: {currentOrder.customer_email}</p>
             <div className='d-flex'>
                <h6>Product :{currentOrder.product}</h6>
                <h6 className='ml-1'>Quantity :{currentOrder.quantity}</h6>
             </div>
             <Button className='mb-1' variant="contained" color="primary">Edit</Button>
         </div>
        )
    );
};

export default ShowAllOrder;


/*

<div style={styles}className='col-md-3'>
             <h5>Name : {currentOrders.customer_name}</h5>
             <p>Email: {currentOrders.customer_email}</p>
             <div className='d-flex'>
                <h6>Product :{currentOrders.product}</h6>
                <h6 className='ml-1'>Quantity :{currentOrders.quantity}</h6>
             </div>
        </div>
*/