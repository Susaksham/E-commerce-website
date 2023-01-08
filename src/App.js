import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/Error/ErrorPage'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/renders'
import ProductDetail from './components/products/ProductDetail'

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/">
            <Route index element={<Home></Home>}></Route>
            <Route path="home" element={<h1>hello bro </h1>}></Route>
            <Route path="products" element={<Home></Home>}></Route>
            <Route
              path=":productId"
              element={<ProductDetail></ProductDetail>}
            ></Route>
          </Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App
