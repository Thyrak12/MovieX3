import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Movie from './Movie';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loki" element={<Movie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
