import React from 'react';
import { BiLinkExternal } from "react-icons/bi";
const Contact = () => {
    const aStyle={
        textDecoration:'none',

    };
    return (
        <div className='text-center mt-5 pt-5'>
             <h2>Go Utilize website</h2>
              <a href="https://www.utilize.app/" target="_blank">Website<BiLinkExternal/></a>
        </div>
    );
};

export default Contact;