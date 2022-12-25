import React, { useState } from 'react'
import NavigationBelt from '../components/NavigationHeader/NavigationBelt'
import FiltersComponent from '../Filters/FiltersComponent'
import Body from '../components/Body/Body'
import Modal from '../UI/Modal'

function Home() {
  const [displayCart, setDisplayCart] = useState(false)

  const cartHandler = () => {
    setDisplayCart(true)
  }
  const removeCartHandler = () => {
    setDisplayCart(false)
  }
  return (
    <div>
      <NavigationBelt onCartHandler={cartHandler}></NavigationBelt>
      <Body></Body>
      {displayCart && <Modal removeCart={removeCartHandler}></Modal>}
    </div>
  )
}

export default Home
