import React, { useState, useContext } from 'react';
import { DataContext } from './context/DataProvider';

const Pagination = ({ handleOffset, itemsLimit = 20, offset }) => {
  const initialPage = (offset + itemsLimit) / itemsLimit;
  console.log(initialPage);

  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalItems = useContext(DataContext).count;

  const totalPages = () => {
    return Math.ceil(totalItems / itemsLimit);
  };

  const pages = [];
  for (let i = 1; i <= totalPages(); i++) {
    pages.push(i);
  }

  const paginationPages = () => {
    const leftPages = [1, '«'];
    const middlePages = pages.slice(
      Number(currentPage) - 2,
      Number(currentPage) + 1
    );
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
    e.preventDefault();
    handleOffset(e.target.id * itemsLimit - itemsLimit);
    setCurrentPage(e.target.id);
  };

  const handleClickLeft = (e) => {
    e.preventDefault();
    handleOffset(currentPage * itemsLimit - 4 * itemsLimit);
    setCurrentPage(Number(currentPage) - 3);
  };

  const handleClickRight = (e) => {
    e.preventDefault();
    handleOffset(currentPage * itemsLimit + 2 * itemsLimit);
    setCurrentPage(Number(currentPage) + 3);
  };

  if (!totalItems || totalItems <= itemsLimit) return null;

  return (
    <div>
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
    </div>
  );
};

export default Pagination;
