import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import Search from './components/Search';
// import DisplayByCategory from './components/DisplayByCategory';
import MovieCard from './components/Card';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Movie />} />
        {/* <Route path="/Latest-Movies" element={<DisplayByCategory category={"Latest Movies"} />} />
        <Route path="/Action-Movies" element={<DisplayByCategory category={"Action Movies"} />} />
        <Route path="/Dramas" element={<DisplayByCategory category={"Dramas"} />} />
        <Route path="/Sci-Fi" element={<DisplayByCategory category={"Sci-Fi"} />} />
        {/* Just add new routes below don't edit all */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
