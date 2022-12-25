import React from 'react'
import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { filterAction } from '../../store/filter'
function CartItem(props) {
  const dispatch = useDispatch()
  const addItemHandler = () => {
    dispatch(
      filterAction.addToCart({
        id: props.id,
        productName: props.productName,
        price: props.price,
        description: props.description,
      }),
    )
  }
  const removeItemHandler = () => {
    dispatch(filterAction.removeFromCart(props.id))
  }
  return (
    <div className={classes.wrapper}>
      <p>{props.productName}</p>
      <p>{props.price}</p>
      <p>{props.items}</p>
      <button onClick={addItemHandler}>+</button>
      <button onClick={removeItemHandler}>-</button>
    </div>
  )
}

export default CartItem
