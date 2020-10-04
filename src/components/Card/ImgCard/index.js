import React from 'react';

import './styles.css';

const ImgCard = ({ img, title }) => {
  return (
    <>
      <img className='img-card' src={img} alt={title} />
    </>
  );
};

export default ImgCard;
