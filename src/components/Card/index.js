import React from 'react';
import ImgCard from './ImgCard';
import imgNorte from '../../assets/images/cangaceiros.jpg';
import ImgNordeste from '../../assets/images/culturanordeste1.jpg';
import './styles.css';
import CardBody from './CardBody';
import { NavLink } from 'react-router-dom';

const Card = () => {
  return (
    <div className='content'>
      <div className='card-content'>
        <NavLink to='/norte'>
          <ImgCard img={imgNorte} title='Imagem do norte' />
        </NavLink>
        <CardBody
          titleCard='Cultura Norte'
          title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis repellendus neque animi maiores optio voluptatibus laboriosam at adipisci suscipit architecto ea illum facere fugit ratione veritatis dolorum, molestias totam.'
        />
      </div>
      <div className='card-content'>
        <NavLink to='/nordeste'>
          <ImgCard img={ImgNordeste} title='Imagem do nordeste' />
        </NavLink>
        <CardBody
          titleCard='Cultura Nordeste'
          title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis repellendus neque animi maiores optio voluptatibus laboriosam at adipisci suscipit architecto ea illum facere fugit ratione veritatis dolorum, molestias totam.'
        />
      </div>
    </div>
  );
};

export default Card;
