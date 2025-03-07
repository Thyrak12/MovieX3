import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swipe.css';

function MovieCard(url, title) {
  return (
    <div className='card-container'>
      <Card style={{ width: '15rem'}} className='card'>
        <Card.Img className='card-img' variant="top" src={url} />
        <Card.Body className='card-body'>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

const CustomMovies = () => {
  const movieNames = ['Flash', 'Study Group', 'Game of Thrones', 'Lucifer', 'Stranger Things', 'Squid Game', 'Arrow', 'Avenger', 'Spider-Man']; // Custom movie names
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = movieNames.map(async (name) => {
          const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
          return response.data;
        });

        const movieData = await Promise.all(moviePromises);
        setMovies(movieData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='slide-container bg-dark'>
      <button className='button-movie'>Dramas ➩</button>
      <div className='card-container'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-10}
          slidesPerView={6}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 6,
            },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              {MovieCard(
                movie.image?.medium || 'https://via.placeholder.com/300', // Fallback Image
                movie.name
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomMovies;
