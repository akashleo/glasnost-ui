import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
// Import Glasnost UI styles directly from the package
import '@glasnost-ui/react/styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 