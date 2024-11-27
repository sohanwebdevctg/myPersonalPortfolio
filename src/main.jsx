import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Providers from './Components/Providers/Providers.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Providers>
  </StrictMode>,
)
