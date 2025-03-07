import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Movie.css';

function CustomMovies() {
    const [movie, setMovie] = useState(null); // Store movie data

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=loki');
                setMovie(response.data); // Store the fetched data in state
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    // If the movie data is not yet available, show loading or placeholder
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
                {/* Picture Grid */}
                <div className='Card-Picture'>
                    <div className='Box1'>
                        <img src={movie.image?.original} alt={movie.name} />
                    </div>
                    <div className='Box2'>
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/210601135448-loki-disney.jpg?q=x_308,y_0,h_1047,w_1860,c_crop/h_833,w_1480" alt={movie.name} />
                    </div>
                </div>

                {/* Movie Information */}
                <div className='Card-Info'>
                    <h3>{movie.name}</h3>
                    <h5>Release Date: {movie.premiered}</h5>
                    <h5>Rating: {movie.rating.average}</h5>
                    <hr />
                    <h5>Summary:</h5>
                    <p>{removeHTMLTags(movie.summary)}</p>
                </div>
            </div>
        </div>
    );
}

export default CustomMovies;
