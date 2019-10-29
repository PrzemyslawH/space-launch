import React from 'react';
import styled from 'styled-components';

import { colors } from '../utils/colors';

const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 30px;
  position: relative;
`;

const Border = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid ${colors.light_dark};
  transform: translate(15px, 15px);
  position:absolute;
`;

const ProfileImage = ({ image }) => {
  return (
    <div>
      <Border />
      <Image src={image} alt={'Profile photo'} />
    </div>
  );
};

export default ProfileImage;
