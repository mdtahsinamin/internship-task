import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Delete = ({orderId,orderIndex}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loginUser,setLoginUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    
    let { from } =location.state || { from: { pathname: "/" } };

    const {orders,ordersLength} = loginUser;

    const styles = {
        position: 'relative',
        left: '100px',
        top: '10px'
    }
    const inputSubmitButton = {
        width: '7.5625em',
        height: '2.5em',
        background: '#835DFF',
        borderRadius: '10px',
        color: '#FFFFFF',
        border:'none',
        fontSize: '16px',
        fontWeight: '600',
        textAlign: 'center',
        marginTop:'5px'
    }
    const inputStyle = {
        width: '19.31em',
        height: '2.5em',
        padding: '0 5px',
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '10px'
    }
    const onSubmit = data => {
        delete orders[Number(orderIndex)];
        alert('Order Deleted');
        history.replace(from);
    };
    return (
        <div style={styles}>
            <h2>Delete</h2>
             <form onSubmit={e=>e.preventDefault()}>
               <label htmlFor="id">Id</label> <br/>
                  <input
                  style={inputStyle}
                  type="text" 
                  name="id" 
                  defaultValue={orderId}
                  placeholder="Enter the id"
                  ref={register}
                  /> <br/>
                  <input
                  style={inputSubmitButton}
                  type="submit" 
                  value="Delete" 
                  onClick={handleSubmit(onSubmit)}/>
             </form>
        </div>
    );
};

export default Delete;

/*
       delete orders[Number(orderIndex)];
        console.log(orders.length);

*/