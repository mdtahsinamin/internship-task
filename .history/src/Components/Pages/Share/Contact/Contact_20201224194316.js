import React from 'react';
import {BiLinkExternal} from 'react-icon/bi'
const Contact = () => {
    const aStyle={
        textDecoration:'none',

    };
    return (
        <div className='text-center'>
             <h2>Go Utilize website</h2>
              <a href="https://www.utilize.app/" target="_blank">Website<BiLinkExternal/></a>
        </div>
    );
};

export default Contact;