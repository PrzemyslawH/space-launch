import React from 'react';
import styled from 'styled-components';

const Details = styled.div`
  margin-left: 40px;
`;

const SectionDetails = ({ children }) => {
  return <Details>{children}</Details>;
};

export default SectionDetails;
