import React from 'react';
import { Link } from 'react-router-dom';
import ItemTitle from './ItemTitle';

const Item = ({ url, name }) => {
  return (
    <li>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <ItemTitle props={name}/>
      </Link>
    </li>
  );
};

export default Item;
