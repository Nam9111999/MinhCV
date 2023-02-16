import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error';
import Main from './pages/main';
import Welcome from './components/welcome';
import About from './pages/about';
import Project from './pages/project';

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
        path:"/info/project",
        element: <Project />,
        errorElement: <ErrorPage />,
      },
      {
        path:"/info/about",
        element: <About />,
        errorElement: <ErrorPage />,
      }
    ]
  },
  {
    path:"/project",
    element: <Project />,
    errorElement: <ErrorPage />,
  }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals