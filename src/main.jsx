import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/MovieX3">
<<<<<<< Updated upstream
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
=======
      <App />
>>>>>>> Stashed changes
    </BrowserRouter>
  </StrictMode>
);