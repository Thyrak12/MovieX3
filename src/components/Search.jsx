import React, { useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import { allMovie } from './Data';  // Import your movie data

const MovieSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setSearchValue(value);

    if (value === "") {
      setFilteredMovies([]);
      return;
    }

    const results = Object.keys(allMovie)
      .filter((movieName) => movieName.toLowerCase().includes(value))
      .map((movieName) => ({
        name: movieName,
        url: allMovie[movieName].url,
      }));

    setFilteredMovies(results);
  };

  return (
    <Container className="my-4">
      <Form>
        <Form.Control
          type="text"
          placeholder="Search for a movie..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </Form>

      <div className="d-flex flex-wrap mt-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Card key={movie.name} style={{ width: '15rem' }} className="m-2">
              <Card.Img variant="top" src={`https://via.placeholder.com/300?text=${movie.name}`} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Button variant="primary" href={movie.url} target="_blank">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </Container>
  );
};

export default MovieSearch;
