import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../Style/Editing.css';
const Editing = () => {
    const {id} = useParams();
    console.log(id);
    return (
     <section className='container'>
           
      </section>
    );
};

export default Editing;


/*

<div className='ml-5 pt-5'>
              <Dropdown>
                    <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                    <span style={{fontSize:'20px',marginRight:'10px'}}><FaOpencart/></span>
                    <span className="badge badge-light">{order.length}</span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
          <div className='d-flex justify-content-center'>
               <div>
                  <input className='search-input' type="text" placeholder="Enter the id or name or email"/>
                  <Button className='btn btn-search' variant="outlined" color="primary">Search</Button>
               </div>
           </div>
*/