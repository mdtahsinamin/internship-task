import React from 'react';
import { useForm } from 'react-hook-form';

const Delete = ({id}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
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
        textAlign: 'center'
    }


    return (
        <div style={styles}>
             <form onSubmit={e=>e.preventDefault()}>
               <label htmlFor="id">Id</label> <br/>
                  <input 
                  type="text" 
                  name="id" 
                  defaultValue={id}
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