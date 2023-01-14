import React, { useState, useEffect, useContext } from 'react'
import NavigationBelt from '../components/NavigationHeader/NavigationBelt'
import FiltersComponent from '../Filters/FiltersComponent'
import Body from '../components/Body/Body'
import Modal from '../UI/Modals/Modal'
import products from '../store/products'
import { useDispatch } from 'react-redux'
import AuthModal from '../UI/Modals/AuthModal'
import MobNav from '../components/mobile/MobNav'
import useDynamicScreen from '../hooks/dynamicScreen'

function Home() {
  // const [view, setView] = useState(window.innerWidth <= 550)
  const [slideBar, setSlideBar] = useState(true)
  const slideNavBar = () => {
    setSlideBar((slideBar) => {
      return !slideBar
    })
  }
  const { viewChecker } = useDynamicScreen()
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
        viewChecker={viewChecker}
      ></NavigationBelt>
      <Body categories={categories}></Body>
      {displayCart && <Modal removeCart={removeCartHandler}></Modal>}
      {displayAuth && <AuthModal removeAuth={authHandler}></AuthModal>}
      {viewChecker < 550 && (
        <MobNav
          slideBar={slideBar}
          slideNavBar={slideNavBar}
          categoriesHandler={categoriesHandler}
        ></MobNav>
      )}
    </div>
  )
}

export default Home
