import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <KindeProvider
    clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
    domain={import.meta.env.VITE_KINDE_DOMAIN}
    redirectUri={window.location.origin}
    logoutUri={window.location.origin}

  >
    <Router>
      <App />
    </Router>
  </KindeProvider>
)