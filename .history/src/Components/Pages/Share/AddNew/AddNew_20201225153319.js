import React from 'react';
import { useForm } from 'react-hook-form';

const AddNew = () => {
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
    const onSubmit = data => console.log(data);
     
    const styles = {
        position: 'relative',
        left: '100px',
        top: '10px'
    }


    return (
        <div style={styles}>
             <form onSubmit={e=>e.preventDefault()}>
                 <label htmlFor="id">Id</label> <br/>
                  <input 
                  type="text" 
                  name="id" 
                  placeholder="Enter the id"
                  ref={register}
                  /> <br/>
                  <label htmlFor="customerName">Customer Name</label> <br/>
                  <input 
                  type="text" 
                  name="customerName" 
                  placeholder="Enter the customer name"
                  ref={register}
                  /> <br/>
                  <label htmlFor="customerEmail">Id</label> <br/>
                  <input 
                  type="text" 
                  name="customerEmail" 
                  placeholder="Enter the customer email"
                  ref={register}
                  /> <br/>
                  <label for="product">Choose a product:</label>
                    <select id="product" name="product" ref={register}>
                    <option value="Product 1">Product 1</option>
                    <option value="Product 2">Product 2</option>
                    <option value="Product 3">Product 3</option>
                </select>
                <label htmlFor="quantity">Id</label> <br/>
                  <input 
                  type="text" 
                  name="quantity" 
                  placeholder="Enter the quantity"
                  ref={register}
                  /> <br/>
                  <input 
                  style={inputSubmitButton}
                  type="submit" 
                  value="Add" 
                  onClick={handleSubmit(onSubmit)}/> <br/>
             </form>
        </div>
    );
};

export default AddNew;