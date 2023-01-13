import React from 'react'
import classes from './MobNav.module.css'
import Person from '../../UI/Person'
import CartIcon from '../../UI/CartIcon'
function MobNav() {
  return (
    <div className={classes.navBar}>
      <div>
        <svg styles={{ width: '2.4rem', height: '2.4rem' }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
          />
        </svg>
      </div>
      <div></div>
      <div>
        <CartIcon></CartIcon>
      </div>
      <div></div>
      <div>
        <Person></Person>
      </div>
    </div>
  )
}

export default MobNav
