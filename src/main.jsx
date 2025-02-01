import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Hero from './Components/Hero.jsx';
import Service from './Components/Service.jsx';
import Stories from './Components/Stories.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: 'error',
    children: [
      {
        path: '/',
        element: <Hero></Hero>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/stories',
        element: <Stories></Stories>
      },

      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
