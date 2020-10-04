import React from 'react';

import './styles.css';

const CardBody = ({ titleCard, title }) => {
  return (
    <>
      <p className='title-card'>{titleCard}</p>
      <p className='text-card'>{title}</p>
    </>
  );
};

export default CardBody;
