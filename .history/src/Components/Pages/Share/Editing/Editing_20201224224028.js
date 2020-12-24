import { Button } from 'bootstrap';
import React, { useState } from 'react';
import businessOrders from '../../../../data/DummyData.json';
const Editing = () => {
    const [order,setOrder] = useState(businessOrders);
    console.log(order);
    return (
     <section>
           <div>
              <input type="text" placeholder="Enter the id or name or email"/>
              <Button variant="outlined" color="primary">Primary</Button>
           </div>
      </section>
    );
};

export default Editing;