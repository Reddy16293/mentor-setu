import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes';
import React from 'react';
import './index.css'
import App from './App.jsx'



import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);