import React from 'react';
import { useForm } from 'react-hook-form';
import { dummyArray } from '../../../../data/DummyData';
import businessOrders from '../../../../data/DummyData.json'
const Update = ({id}) => {

    const inputSubmitButton = {
        width: '7.5625em',
        height: '2.5em',
        background: '#835DFF',
        borderRadius: '10px',
        color: '#FFFFFF',
        border:'none',
        fontSize: '16px',
        fontWeight: '600',
        textAlign: 'center'
    }
    const { register, handleSubmit, watch, errors } = useForm();
     
    const styles = {
        position: 'relative',
        left: '100px',
        top: '10px'
    }
    const inputStyle = {
        width: '19.31em',
        height: '2.5em',
        padding: '0 5px',
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '10px'
    }

    const onSubmit = data =>{
         const order =businessOrders.find(order => order.id === id);
         order.customer_name = data.customer_name;
         order.customer_email = data.customer_email;
         order.product = data.product
         order.quantity = data.quantity;
         console.log(order);
    };

    const order = businessOrders.find(order => order.id === id);



    return (
        <div style={styles}>
            <h2>Update</h2>
            <form onSubmit={e=>e.preventDefault()}>
                 <label htmlFor="id">ID</label> <br/>
                  <input
                  style={inputStyle}
                  type="text" 
                  name="id" 
                  defaultValue={id}
                  placeholder="Enter the id"
                  ref={register}
                  /> <br/>
                  <label htmlFor="customerName">Customer Name</label> <br/>
                  <input 
                  style={inputStyle}
                  type="text" 
                  name="customer_name"
                  defaultValue={order.customer_name}
                  placeholder="Enter the customer name"
                  ref={register}
                  /> <br/>
                  <label htmlFor="customerEmail">Email</label> <br/>
                  <input
                  style={inputStyle}
                  type="text" 
                  name="customer_email" 
                  defaultValue={order.customer_email}
                  placeholder="Enter the customer email"
                  ref={register}
                  /> <br/>
                  <label className='mt-2' for="product">Choose a product:</label>
                    <select id="product"
                     name="product"
                     defaultValue={order.product}
                     ref={register}>
                    <option value="Product 1">Product 1</option>
                    <option value="Product 2">Product 2</option>
                    <option value="Product 3">Product 3</option>
                </select> <br/>
                <label htmlFor="quantity">Quantity</label> <br/>
                  <input
                  style={inputStyle}
                  type="text" 
                  name="quantity"
                  defaultValue={order.quantity}
                  placeholder="Enter the quantity"
                  ref={register}
                  /> <br/> <br/>
                  <input 
                  style={inputSubmitButton}
                  type="submit" 
                  value="Update" 
                  onClick={handleSubmit(onSubmit)}/>
             </form>
        </div>
    );
};

export default Update;