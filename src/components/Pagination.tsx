import './Pagination.css';

import React from 'react';

interface IPaginationProps {
    moviesPerPage: number;
    totalMovies: number;
    paginate: (page:number) => void;
}

export const Pagination = (props: IPaginationProps) => {
    const {moviesPerPage, totalMovies, paginate} = props;
    const pageNumbers = [];
    for( let i = 0; i <= Math.ceil(totalMovies/moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination-container'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}