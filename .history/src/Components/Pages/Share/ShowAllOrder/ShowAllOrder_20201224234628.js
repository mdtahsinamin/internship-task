import React from 'react';

const ShowAllOrder = ({order}) => {

    const styles ={
        border: '1px solid gray'
    };

    return (
        <div style={styles}className='col-md-3'>
             <h4>Customer Name : {order.customer_name}</h4>
             <h5>Customer Email: {order.customer_email}</h5>
             <p>Product :{order.product}</p>
             <h6>Quantity :{order.quantity}</h6>
        </div>
    );
};

export default ShowAllOrder;