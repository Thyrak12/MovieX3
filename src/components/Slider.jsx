import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
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

const CustomMovies = ({ movieNames }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const { id, titles } = movieNames; // Correct destructuring

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = titles.map(async (movie) => {  // Fix: Use titles, not title
          const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${movie.name}`);
          return response.data;
        });

        const movieData = await Promise.all(moviePromises);
        setMovies(movieData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [titles]); // Fix: Use titles, not title

  return (
    <div className='slide-container bg-dark'>
      {/* Navigate to a dynamic category page */}
      <button className='button-movie'>
        {id} ➩
      </button>

      <div className='card-container'>
        <Swiper
          style={{ "--swiper-navigation-size": "30px" }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-10}
          slidesPerView={6}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
            1440: { slidesPerView: 6 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard 
                onClick={() => navigate(`/${movie.name}`)}
                url={movie.image?.medium || 'https://via.placeholder.com/300'}
                title={movie.name}  // Fix: Correct title reference
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomMovies;

// No editing (Just fixed errors)
