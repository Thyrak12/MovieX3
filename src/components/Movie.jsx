import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Movie.css';
import { dataMovie } from './Data.js'; // Import movie data
const Movie = () => {
  const { name } = useParams(); // Get movie name from URL
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchMovie();

    // Find the correct YouTube URL from dataMovie
    const foundMovie = dataMovie.flatMap((category) => category.titles).find((m) => m.name === name);
    setTrailerUrl(foundMovie?.url || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // Default trailer if not found

  }, [name]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const removeHTMLTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className='bg-dark'>
      <div className='Card-container'>
        <div className='Card-Picture'>
          <div className='Box1'>
            <img src={movie.image?.original} alt={movie.name} />
          </div>
          <div className='Box2'>
            <ReactPlayer url={trailerUrl} width='100%' height='100%' />
          </div>
        </div>

        <div className='Card-Info'>
          <h3>{movie.name}</h3>
          <h5>Release Date: {movie.premiered}</h5>
          <h5>Rating: {movie.rating?.average || 'N/A'}</h5>
          <hr />
          <h5>Summary:</h5>
          <p>{removeHTMLTags(movie.summary)}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
