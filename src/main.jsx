import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './global.sass'
import { QuestsProvider } from './context/QuestsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestsProvider>
      <App />
    </QuestsProvider>
  </React.StrictMode>,
)
