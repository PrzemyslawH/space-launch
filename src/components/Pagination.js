import React, { useState } from 'react';

const Pagination = ({ totalItems, handleOffset, offset, itemsLimit = 20 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = () => {
    return Math.ceil(totalItems / itemsLimit);
  };

  const pages = [];
  for (let i = 1; i <= totalPages(); i++) {
    pages.push(i);
  }

  const paginationPages = () => {
    const leftPages = [1, '«'];
    const middlePages = pages.slice(Number(currentPage) - 2, Number(currentPage) + 1);
    const rightPages = ['»', totalPages()];

    const pagesWithLeft = [...leftPages, ...pages.slice(totalPages() - 5)];
    const pagesWithLeftRight = [...leftPages, ...middlePages, ...rightPages];
    const pagesWithRight = [...pages.slice(0, 5), ...rightPages];

    const showAll = totalPages() <= 7;
    const showRight = currentPage <= 3;
    const showLeft = currentPage >= totalPages() - 2;

    if (showAll) return pages;
    else if (showRight) return pagesWithRight;
    else if (showLeft) return pagesWithLeft;
    else return pagesWithLeftRight;
  };

  const handleClick = (e) => {
    handleOffset(e.target.id * itemsLimit - itemsLimit);
    setCurrentPage(e.target.id);
  };

  const handleClickLeft = () => {
    handleOffset(offset - itemsLimit * 3);
    setCurrentPage(Number(currentPage) - 3);
  };

  const handleClickRight = () => {
    handleOffset(offset + itemsLimit * 3);
    setCurrentPage(Number(currentPage) + 3);
  };

  if (!totalItems || totalItems <= itemsLimit) return null;

  return (
    <nav>
      <ul>
        {paginationPages().map((paginationPage, index) => {
          if (paginationPage === '«')
            return (
              <li key={index}>
                <a href="#" onClick={handleClickLeft}>
                  {paginationPage}
                </a>
              </li>
            );

          if (paginationPage === '»')
            return (
              <li key={index}>
                <a href="#" onClick={handleClickRight}>
                  {paginationPage}
                </a>
              </li>
            );

          return (
            <li key={index}>
              <a href="#" id={paginationPage} onClick={handleClick}>
                {paginationPage}
              </a>
            </li>
          );
        })}
      </ul>
      <p>{`Current page: ${currentPage}`}</p>
      {offset}
    </nav>
  );
};

export default Pagination;
