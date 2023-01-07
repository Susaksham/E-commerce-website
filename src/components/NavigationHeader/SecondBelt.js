import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './SecondBelt.module.css'
function SecondBelt(props) {
  return (
    <div className={classes.wrapper}>
      <div style={{ display: 'flex', gap: '1.12rem', alignItems: 'center' }}>
        <svg
          onClick={props.categoriesHandler}
          style={{ width: '24px', height: '24px' }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9"
          />
        </svg>
        <h3 onClick={props.categoriesHandler}>Categories</h3>
      </div>

      <div className={classes.navigation}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.unactive
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={(navData) =>
            navData.isActive ? classes.productsActive : classes.productsUnactive
          }
        >
          Products
        </NavLink>
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}

export default SecondBelt
