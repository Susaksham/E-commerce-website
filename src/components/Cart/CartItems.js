import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../UI/Card'
import CartItem from './CartItem'
import classes from './CartItems.module.css'
import Button from '../../UI/Button/Button'
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
  const items = cartItems.reduce((accumadate, current) => {
    accumadate = accumadate + current.items
    return accumadate
  }, 0)
  console.log(cartItems)

  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>Checkout Goods {items}</h1>
      <div className={classes.items}>
        {cartItems.map((element) => {
          console.log(element.image)
          return (
            <CartItem
              id={element.id}
              price={element.price}
              description={element.description}
              items={element.items}
              key={element.id}
              productName={element.title}
              imageUrl={element.image}
            ></CartItem>
          )
        })}
      </div>
      <div className={classes.buttons}>
        <Button text="Cancel" onClick={removeCartHandler}></Button>
        <Button text="Order" onClick={orderingHandler}></Button>
      </div>
    </div>
  )
}

export default CartItems
