import React from 'react'
import classes from './Product.module.css'
import { useDispatch } from 'react-redux'
import { filterAction } from '../../store/filter'
import { Link } from 'react-router-dom'
function Product(props) {
  const dispatch = useDispatch()
  const addItemHandler = () => {
    dispatch(
      filterAction.addToCart({
        id: props.id,
        title: props.productName,
        price: props.price,
        description: props.description,
        image: props.image,
      }),
    )
  }
  return (
    <div className={classes.wrapper}>
      <Link className={classes.linkStyling} to={`/${props.id}`}>
        <div className={classes.image}>
          <img
            src={props.image}
            className={classes.image}
            alt={props.productName}
          ></img>
        </div>
        <h3>${props.price}</h3>
        <p>{props.productName.substring(0, 50)}</p>
      </Link>

      <div className={classes.bottom}>
        <div className={classes.star}>
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            />
          </svg>
          <div className={classes.rating}>{props.star.toFixed(1)}</div>
        </div>
        <div onClick={addItemHandler} className={classes.cart}>
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path
              fill="#ffff"
              d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Product
