import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from "./pages/root";
import EventsGroups from './pages/eventsGroups';
import Home from './pages/home';
import StartGroup from './pages/startGroup';
import Login from './pages/login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true,
        element: <Home /> 
      },
      {
        path: "activity",
        element: <EventsGroups />,
      },
      {
        path: "start-group",
        element: <StartGroup />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
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
