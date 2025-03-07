import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Movie />} />
        {/* Just add new routes below don't edit all */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
