import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 60px;
  object-fit: cover;
`;

const Image = ({ props }) => {
  return <Img src={props} alt={'Image'} />;
};

export default Image;
