import React, { useState } from 'react';
import businessOrders from '../../../../data/DummyData.json';
const Editing = () => {
    const [order,setOrder] = useState(businessOrders);
    console.log(order);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Editing;