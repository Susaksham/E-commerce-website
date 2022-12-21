import React from 'react'
import classes from './MinOrder.module.css'
import { useState } from 'react'
function MinOrder() {
  const [price, setPrice] = useState(() => {
    return 300
  })
  const priceChangeHandler = (e) => {
    setPrice(e.target.value)
  }
  return (
    <div className={classes.minOrder}>
      <h2>Min Order</h2>
      <form>
        <input
          type="range"
          min="0"
          max="1000"
          style={{ width: '198px' }}
          onChange={priceChangeHandler}
        ></input>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '198px',
          }}
        >
          <span>0</span>
          <span>{price}</span>
          <span>1000</span>
        </div>
      </form>
    </div>
  )
}

export default MinOrder
