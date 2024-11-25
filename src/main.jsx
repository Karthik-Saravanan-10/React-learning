import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InputPost from './routes/InputPost.jsx'
import Rootlayout from './routes/Rootlayout.jsx'
import Viewpost from './routes/Viewpost.jsx'

let routers = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        path: '/',
        element:<Viewpost /> ,
        children: [{ path: '/createPost', element: <InputPost /> }]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)
