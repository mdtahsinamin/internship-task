import React from 'react';

const Pagination = ({postPerPage,totalPosts}) => {

    const pageNumber = [];

    for(let i = 1; i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumber.push(i);
    }
    return (
        <nav>
           <ul className="pagination">
               {
                   pageNumber.map(number =>(
                       <li key={number} className='page-item'>
                            <a href="!#" className='page-link'>
                                {number}
                            </a>
                       </li>
                   ))
               }
            </ul>  
        </nav>
    );
};

export default Pagination;