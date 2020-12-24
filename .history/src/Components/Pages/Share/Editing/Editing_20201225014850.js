import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../Style/Editing.css';
import businessOrders from '../../../../data/DummyData.json';
import {MdAddShoppingCart} from 'react-icons/md';
import {GrUpdate} from 'react-icons/gr';
import {MdDelete} from 'react-icons/md';
const Editing = () => {
    const {id} = useParams();
    const[orders,setOrder] = useState(businessOrders);
    console.log(id);
    
    const [different,setDifferent] = useState({
        add:true,
        update:false,
        delete:false
    })
    const handleNewAdd = () =>{
        setDifferent({
            add:true,
            update:false,
            delete:false
        })
    }

    const handleUpdate = () =>{
        setDifferent({
            add:false,
            update:true,
            delete:false
        })
    }
   
    const handleDelete = () =>{
        setDifferent({
            add:false,
            update:false,
            delete:true
        })
    }

    return (
     <section className='container'>
            <div className='d-flex mt-5 editing-Panel'>
                <div>
                   <h5>Editing Panel</h5>
                    <ul className="list-group">
                    <li className="list-group-item" role='button'>
                        <span style={{fontSize:'21px'}}><MdAddShoppingCart/></span> Add New
                    </li>
                    <li className="list-group-item" role='button'>
                       <span style={{fontSize:'18px',marginRight:'5px'}}><GrUpdate/></span>
                        Update</li>
                    <li class="list-group-item" role='button'>
                     <span style={{fontSize:'21px'}}><MdDelete/></span>        Delete
                     </li>

                    </ul>
                </div>
                <div>



                </div>
            </div>
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