import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from 'react-router'
import { RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout'
import Books from './pages/books/Books'
import HomePage from './pages/Homepage/HomePage'
import { router } from "./routes/Routes"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
      <h2 className='btn bg-red-500'>Hello</h2>
    </RouterProvider>
  </StrictMode>,
)
