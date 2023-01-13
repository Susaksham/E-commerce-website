import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './components/Error/ErrorPage'
import ProductsPage from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/renders'
import ProductDetail from './components/products/ProductDetail'
import { useContext } from 'react'
import { authContext } from './store/auth-context'
import classes from './App.css'
import MobNav from './components/mobile/MobNav'
function App() {
  const authCtx = useContext(authContext)

  return (
    <div className={classes.wrapper}>
      <Provider store={store}>
        <Routes>
          <Route path="/">
            <Route index element={<MobNav></MobNav>}></Route>
            <Route path="home" element={<h1>hello bro </h1>}></Route>
            <Route
              path="products"
              element={<ProductsPage></ProductsPage>}
            ></Route>
            <Route
              path=":productId"
              element={<ProductDetail></ProductDetail>}
            ></Route>
          </Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Provider>
    </div>
  )
}

export default App
