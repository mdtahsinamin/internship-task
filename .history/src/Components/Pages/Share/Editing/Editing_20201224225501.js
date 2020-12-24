import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import businessOrders from '../../../../data/DummyData.json';
import {FaOpencart} from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
const Editing = () => {
    const [order,setOrder] = useState(businessOrders);
    console.log(order);
    return (
     <section>
        <div className='d-flex justify-content-center align-items-center'>
           <div>
              <Dropdown>
                    <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                    <span style={{fontSize:'18px',marginRight:'10px'}}><FaOpencart/></span>
                    <span className="badge badge-light">{order.length}</span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
               <div>
                  <input type="text" placeholder="Enter the id or name or email"/>
                  <Button variant="outlined" color="primary">Primary</Button>
               </div>
           </div>
      </section>
    );
};

export default Editing;