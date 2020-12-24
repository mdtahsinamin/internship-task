import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ShowAllOrder = ({currentOrders}) => {

    const styles ={
        border: '1px solid gray'
    };
    const history = useHistory();
    
    const handleHistory = (id) =>{
          history.push(`/order-editing/${id}`)
    }

    return (
        currentOrders.map(currentOrder=>
            <div style={styles}className='col-md-3 mt-5'>
             <h5>Name : {currentOrder.customer_name}</h5>
             <p>Email: {currentOrder.customer_email}</p>
             <div className='d-flex'>
                <h6>Product :{currentOrder.product}</h6>
                <h6 className='ml-1'>Quantity :{currentOrder.quantity}</h6>
             </div>
            <Link to={}></Link>
         </div>
        )
    );
};

export default ShowAllOrder;
