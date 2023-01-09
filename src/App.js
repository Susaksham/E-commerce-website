import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/Error/ErrorPage'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/renders'
import ProductDetail from './components/products/ProductDetail'
import { useContext } from 'react'
import { authContext } from './store/auth-context'

function App() {
  const authCtx = useContext(authContext)

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
