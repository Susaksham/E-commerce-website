import React from 'react'
import classes from './Product.module.css'
function Product(props) {
  return (
    <div className={classes.wrapper}>
      <div>
        <img
          src={props.image}
          className={classes.image}
          alt={props.productName}
        ></img>
      </div>
      <h3>${props.price}</h3>
      <p>{props.productName}</p>
      <p>
        {props.cpu}, {props.screen}
      </p>
      <div className={classes.bottom}></div>
    </div>
  )
}

export default Product
