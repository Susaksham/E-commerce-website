import React, { useState, useEffect, useContext } from 'react'
import NavigationBelt from '../components/NavigationHeader/NavigationBelt'
import FiltersComponent from '../Filters/FiltersComponent'
import Body from '../components/Body/Body'
import Modal from '../UI/Modals/Modal'
import products from '../store/products'
import { useDispatch } from 'react-redux'
import AuthModal from '../UI/Modals/AuthModal'

function ProductsPage() {
  const [displayCart, setDisplayCart] = useState(false)
  const [categories, setCategories] = useState(true)
  const [displayAuth, setDisplayAuth] = useState(false)
  const dispatch = useDispatch()

  const cartHandler = () => {
    setDisplayCart(true)
  }
  const removeCartHandler = () => {
    setDisplayCart(false)
  }
  const categoriesHandler = () => {
    setCategories((state) => {
      return !state
    })
  }
  const authHandler = () => {
    setDisplayAuth((state) => {
      return !state
    })
  }
  useEffect(() => {
    dispatch(products())
  }, [dispatch])

  return (
    <div>
      <NavigationBelt
        categoriesHandler={categoriesHandler}
        onCartHandler={cartHandler}
        authHandler={authHandler}
      ></NavigationBelt>
      <Body categories={categories}></Body>
      {displayCart && <Modal removeCart={removeCartHandler}></Modal>}
      {displayAuth && <AuthModal removeAuth={authHandler}></AuthModal>}
    </div>
  )
}

export default ProductsPage
