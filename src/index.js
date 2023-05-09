import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './pages/Home/App';
import Profil from './pages/Profil/Profil';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profil/:id",
    element: <Profil />
  },
  {
    path: "/*",
    element: <Error />
  }
])

root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Sidebar />
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);

reportWebVitals();