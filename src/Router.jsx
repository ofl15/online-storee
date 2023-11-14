import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'



const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/register' Component={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router