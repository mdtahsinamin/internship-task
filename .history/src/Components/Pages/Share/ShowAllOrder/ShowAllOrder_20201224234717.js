import React from 'react';

const ShowAllOrder = ({order}) => {

    const styles ={
        border: '1px solid gray'
    };

    return (
        <div style={styles}className='col-md-3'>
             <h4>Name : {order.customer_name}</h4>
             <h6>Email: {order.customer_email}</h6>
             <div className='d-flex'>
               <p>Product :{order.product}</p>
               <h6>Quantity :{order.quantity}</h6>
             </div>
        </div>
    );
};

export default ShowAllOrder;