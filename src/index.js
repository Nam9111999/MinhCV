import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error';
import Main from './pages/main';
import Welcome from './pages/welcome';
import About from './pages/about';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/info",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/info/main",
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path:"/info/photograph",
        element: <Main />,
        errorElement: <ErrorPage />,
      }, 
      {
        path:"/info/animation",
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path:"/info/about",
        element: <About />,
        errorElement: <ErrorPage />,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals