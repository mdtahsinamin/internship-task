import React from 'react';

const ShowAllOrder = ({currentOrders}) => {

    const styles ={
        border: '1px solid gray'
    };

    return (
        <div style={styles}className='col-md-3'>
             <h5>Name : {currentOrders.customer_name}</h5>
             <p>Email: {currentOrders.customer_email}</p>
             <div className='d-flex'>
                <h6>Product :{currentOrders.product}</h6>
                <h6 className='ml-1'>Quantity :{currentOrders.quantity}</h6>
             </div>
        </div>
    );
};

export default ShowAllOrder;