import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserForm from './Component/UserForm'
import View from './Component/View'
import Form from './Component/Form'
import Priyanga from './Component/Priyanga'
import Get from './Component/Get'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Get/>}></Route>
            <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
