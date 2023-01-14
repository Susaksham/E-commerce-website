import React from 'react'
import classes from './MobNav.module.css'
import Person from '../../UI/Person'
import CartIcon from '../../UI/CartIcon'
import SearchIcon from '../../UI/SearchIcon'
function MobNav() {
  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <div>
          {/* <svg styles={{ width: '2.4rem', height: '2.4rem' }} viewBox="0 0 24 24">
          <path
          fill="currentColor"
          d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
          />
        </svg> */}
          <i className={`${classes.homeIcon} fi fi-rr-home`}></i>
        </div>
        <div>
          {/* <SearchIcon></SearchIcon> */}{' '}
          <i className={`${classes.searchIcon} fi fi-rr-search`}></i>
        </div>
        <div className={classes.shoppingBagAround}>
          <div className={classes.shoppingBagContainer}>
            <i className={`${classes.shoppingBag} fi fi-rr-shopping-bag`}></i>{' '}
          </div>
        </div>

        <div>
          <i className={`${classes.categories} fi fi-rr-apps`}></i>
        </div>
        <div>
          <i className={`${classes.person} fi fi-rr-user`}></i>
        </div>
      </div>
    </div>
  )
}

export default MobNav
