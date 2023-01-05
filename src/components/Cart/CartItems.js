import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../UI/Card'
import CartItem from './CartItem'
import classes from './CartItems.module.css'
function CartItems(props) {
  const cartItems = useSelector((state) => {
    return state.filters.cart
  })
  const orderingHandler = () => {
    console.log(cartItems)
  }
  const removeCartHandler = () => {
    props.removeCart()
  }
  console.log(cartItems)

  return (
    <div className={classes.card}>
      {cartItems.map((element) => {
        return (
          <CartItem
            id={element.id}
            price={element.price}
            description={element.description}
            items={element.items}
            key={element.id}
            productName={element.title}
          ></CartItem>
        )
      })}
      <button onClick={removeCartHandler}>Cancel</button>
      <button onClick={orderingHandler}>Order</button>
    </div>
  )
}

export default CartItems
