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
    <div className='max-w-[1440px] mx-auto inter-font'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
