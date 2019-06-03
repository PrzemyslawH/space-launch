import React, { useState, useEffect } from 'react';

const Pagination = ({ count }) => {
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(10);

  const countPages = () => {
    return Math.ceil(count / 20);
  };
  
  const pageNumbers = [];
    for (let i = 1; i <= countPages(); i++) {
      pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map(pageNumber => (
        <li
          key={pageNumber}
          id={pageNumber}
          onClick={event => setOffset(event.target.id * 20 - 20)}
          style={{
            display: 'inline-block',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          {pageNumber}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
