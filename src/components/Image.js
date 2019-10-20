import React from 'react';

const Image = ({ props }) => {
  return (
    <div>
      <img
        src={props}
        alt={'no image...'}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '60px',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default Image;
