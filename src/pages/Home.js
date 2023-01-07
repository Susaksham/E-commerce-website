import React, { useState, useEffect, useContext } from 'react'
import NavigationBelt from '../components/NavigationHeader/NavigationBelt'
import FiltersComponent from '../Filters/FiltersComponent'
import Body from '../components/Body/Body'
import Modal from '../UI/Modal'
import products from '../store/products'
import { useDispatch } from 'react-redux'

function Home() {
  const [displayCart, setDisplayCart] = useState(false)
  const [categories, setCategories] = useState(true)
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
  useEffect(() => {
    dispatch(products())
  }, [dispatch])

  return (
    <div>
      <NavigationBelt
        categoriesHandler={categoriesHandler}
        onCartHandler={cartHandler}
      ></NavigationBelt>
      <Body categories={categories}></Body>
      {displayCart && <Modal removeCart={removeCartHandler}></Modal>}
    </div>
  )
}

export default Home
