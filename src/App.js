import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/Error/ErrorPage'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>}></Route>
          <Route path="home" element={<h1>hello bro </h1>}></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  )
}

export default App
