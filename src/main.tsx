import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Wichtige Imports für den neuen Router
import { createHashRouter, RouterProvider } from 'react-router-dom'; 
import App from './App.tsx';
import './index.css';

// 2. Erstelle den Router außerhalb der render-Funktion
const router = createHashRouter([
  {
    path: "/*", // Diese Route fängt alle Pfade (z.B. / , /about, /contact) ab
    element: <App />,
    // Hier könntest du auch Fehlerseiten oder andere Hauptrouten definieren
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 3. Binde den Router hier über den Provider ein */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);