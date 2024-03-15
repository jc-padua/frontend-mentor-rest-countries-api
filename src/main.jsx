import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'src/context/ThemeContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/country/:countryName',
    element: <CountryDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
