import React from 'react'
import classes from './MinOrder.module.css'
function MinOrder() {
  return (
    <div className={classes.minOrder}>
      <h2>Min Order</h2>
      <form>
        <input
          type="range"
          min="0"
          max="1000"
          style={{ width: '198px' }}
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
          <span>1000</span>
        </div>
      </form>
    </div>
  )
}

export default MinOrder
