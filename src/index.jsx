import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from "./pages/root";
import Groups from './pages/groups';
import Events from './pages/events';
import Home from './pages/home';
import StartGroup from './pages/startGroup';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true,
        element: <Home /> 
      },
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "start-group",
        element: <StartGroup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
