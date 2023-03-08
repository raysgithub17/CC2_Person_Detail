import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Form from './Component/Form'
import Get from './Component/Get'
import Update from './Component/Update'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form/>
    <Update/>
    <Get/>
  </React.StrictMode>,
)
