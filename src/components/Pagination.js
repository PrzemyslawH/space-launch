import React from 'react';

const Pagination = ({ totalItems, pageLimit = 20, handlePageNumber }) => {
  const totalPages = () => {
    return Math.ceil(totalItems / pageLimit);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages(); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          id={pageNumber}
          onClick={(event) =>
            handlePageNumber(event.target.id * pageLimit - pageLimit)
          }
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
