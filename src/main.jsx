import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'src/context/ThemeContext.jsx';
import { CountryProvider } from './context/CountryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CountryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
