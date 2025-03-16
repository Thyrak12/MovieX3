import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
<<<<<<< HEAD
=======
// import './main.css';
>>>>>>> 884587cd9c19870652cf12f69da85b8bd6c60019


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/MovieX3">
      <App />
    </BrowserRouter>
  </StrictMode>
);