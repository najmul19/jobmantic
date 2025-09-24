import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-[1440px] mx-auto inter-font bg-gradient-to-br from-[#F9FBFF] via-[#F5F9FF] to-[#E6F2FF]'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
