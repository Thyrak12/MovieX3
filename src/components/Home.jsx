import React, { useState } from 'react';
import { dataMovie } from './Data';  // Import your movie data
import CustomMovies from './Slider';
import MovieCard  from './Card';  // Assuming MovieCard is a separate component to display each card
import { Container, Form } from 'react-bootstrap';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setSearchValue(value);

    // Filter movies based on search input
    const allMovies = dataMovie.flatMap((category) => category.titles);  // Flatten the movie categories into a single array
    const results = allMovies.filter((movie) => movie.name.toLowerCase().includes(value));

    setFilteredMovies(results);
  };

  return (
    <div>
      <Header />
      <Container className="my-4">
        <Form>
          <Form.Control
            type="text"
            placeholder="Search for a movie..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </Form>
        
        {/* Display filtered movie cards */}
        <div className="d-flex flex-wrap mt-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.name} url={movie.url} title={movie.name} />
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </Container>
      
      <div>
        {dataMovie.map((category) => (
          <CustomMovies key={category.id} movieNames={category} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
