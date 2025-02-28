import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Movie from './Movie';
import LoginForm from './loginForm';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loki" element={<Movie />} />
        <Route path="/loginForm" element={<LoginForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
