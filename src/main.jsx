import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './dist/css/main.css'

import { BrowserRouter } from "react-router-dom" //untuk router pertama

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* router kedua di deklasrasi di Main setelah itu ke App.jsx */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
