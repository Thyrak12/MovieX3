import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/MovieX3">
<<<<<<< Updated upstream
      <App />
=======
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="*" element={<login_Page/>} />
      </Routes>
>>>>>>> Stashed changes
    </BrowserRouter>
  </StrictMode>
);