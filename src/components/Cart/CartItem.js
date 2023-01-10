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
      <div className={classes.image}>
        <img src={`${props.imageUrl}`} alt=" not available"></img>
      </div>
      <div className={classes.detail}>
        <p>{props.productName}</p>
        <div className={classes.buttons}>
          <button onClick={removeItemHandler}>-</button>
          <p>{props.items}</p>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
      <div className={classes.price}>
        <p>${props.price}</p>
      </div>
    </div>
  )
}

export default CartItem
