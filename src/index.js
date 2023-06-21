import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Style
import './App.scss';

// Routes
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import OfferIndvidual from "./pages/Offer-Indvidual";
import OfferDriver from "./pages/Offer-Driver";
import ErrorPage from "./pages/ErrorPage";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/informacje-dla-klienta",
        element: <OfferIndvidual />
      },
      {
        path: "/informacje-dla-kierowcy",
        element: <OfferDriver />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
