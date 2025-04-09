import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import DisplayByCategory from './components/DisplayByCategory';
import MovieCard from './components/Card';
import { useState } from 'react';
import DisplaySearch from './components/DisplaySearch';
import { dataMovie } from './components/Data';

function App() {
  const [movies, setMovies] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <Header
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        setMovies={setMovies}
      />

      <Routes>
        <Route path="/" element={!isSearch ? <Home /> : <DisplaySearch movies={movies} />} />
        <Route path="/:name" element={<Movie />} />
        {dataMovie.map(element => (
          <Route path={'/' + element.id} element={<DisplayByCategory category={element.id} />} />
        ))}
        {/* Just add new routes below don't edit all */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
