import React from 'react';

const ShowAllOrder = ({order}) => {

    const styles ={
        border: '1px solid gray'
    };

    return (
        <div style={styles}className='col-md-3'>
             <h5>Name : {order.customer_name}</h5>
             <p style={{fontWeight:'500'}}>Email: {order.customer_email}</p>
             <div className='d-flex'>
                <h6>Product :{order.product}</h6>
                <h6 className='ml-1'>Quantity :{order.quantity}</h6>
             </div>
        </div>
    );
};

export default ShowAllOrder;