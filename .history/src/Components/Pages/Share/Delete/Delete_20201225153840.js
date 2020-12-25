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


    return (
        <div style={styles}>
             <form onSubmit={e=>e.preventDefault()}>
               <label htmlFor="id">Id</label>
                  <input 
                  type="text" 
                  name="id" 
                  defaultValue={id}
                  placeholder="Enter the id"
                  ref={register}
                  /> <br/>
                  <input 
                  type="submit" 
                  value="Add" 
                  onClick={handleSubmit(onSubmit)}/>
             </form>
        </div>
    );
};

export default Delete;