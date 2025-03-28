import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swipe.css';

const MovieCard = ({ url, title , onClick}) => (
  <div className='card-container' onClick={onClick} style={{ cursor: 'pointer' }}>
    <Card style={{ width: '15rem' }} className='card'>
      <Card.Img className='card-img' variant="top" src={url} />
      <Card.Body className='card-body'>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);

export default MovieCard;