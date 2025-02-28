import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Movie from './Movie';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loki" element={<Movie />} />
<<<<<<< Updated upstream
=======
        <Route path="/login" element={<LoginForm />} />
>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </>
  )
}

export default App
