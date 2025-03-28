import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
<<<<<<< HEAD
// import './main.css';

=======
>>>>>>> f64c1cc535abcc2421e230f81be49ad7deb1b356

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/MovieX3">
      <App />
    </BrowserRouter>
  </StrictMode>
);