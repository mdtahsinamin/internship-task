import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import businessOrders from '../../../../data/DummyData.json';
import {FaOpencart} from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import '../../../Style/Editing.css';
const Editing = () => {
    const [order,setOrder] = useState(businessOrders);
    console.log(order);
    return (
     <section>
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
                  <Button variant="outlined" color="primary">Search</Button>
               </div>
           </div>
      </section>
    );
};

export default Editing;