import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';
import { media } from '../utils/media';

const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.medium_light};
  word-break: break-word;
  
  @media (max-width: ${media.phone}) {
    display: block;
    margin-bottom: 10px;
  }
`;

const ItemSubtitle = ({ props }) => {
  return <Subtitle>{props}</Subtitle>;
};

export default ItemSubtitle;
