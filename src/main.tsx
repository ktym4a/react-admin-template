import React from 'react'
import ReactDOM from 'react-dom/client'

// eslint-disable-next-line import/extensions
import App from '@/pages/App'
import '@/styles/index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
