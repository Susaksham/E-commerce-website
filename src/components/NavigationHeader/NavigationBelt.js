import React, { useContext, useRef } from 'react'
import classes from './NavigationBelt.module.css'
import CartIcon from '../../UI/CartIcon'
import Person from '../../UI/Person'
import SearchIcon from '../../UI/SearchIcon'
import SecondBelt from './SecondBelt'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import filter, { filterAction } from '../../store/filter'
import { authContext } from '../../store/auth-context'
function NavigationBelt(props) {
  const cart = useSelector((state) => {
    return state.filters.cart
  })
  const authCtx = useContext(authContext)
  const dispatch = useDispatch()
  const searchRef = useRef('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
    // dispatch(filterAction.changeSearchString(`${searchRef.current.value}`))
  }
  const searchChangeHandler = (e) => {
    dispatch(filterAction.changeSearchString(`${e.target.value}`))
  }
  const items = cart.reduce((accumadate, current) => {
    accumadate = accumadate + current.items
    return accumadate
  }, 0)
  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.icon}>🛍️</span> BestBuy
        </h1>
        <form className={classes.search} onSubmit={submitHandler}>
          <div className={classes.searchIcon}>
            <SearchIcon color={`black`} size="32"></SearchIcon>
          </div>
          <input
            ref={searchRef}
            type="text"
            placeholder={'Search and hit enter'}
            onChange={searchChangeHandler}
          ></input>
          <button className={classes.submit} type="submit">
            <SearchIcon color="white" size="24px"></SearchIcon>
            Search
          </button>
        </form>
        <div className={classes.icons_container}>
          <div className={classes.cart}>
            {authCtx.idToken.length === 0 ? (
              <Person onClick={props.authHandler}></Person>
            ) : (
              <img
                className={classes.profile}
                src={`https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000`}
                alt=" not available"
                onClick={props.authHandler}
              ></img>
            )}
          </div>
          <div className={classes.cart}>
            <CartIcon onClick={props.onCartHandler}></CartIcon>
            <span className={classes.cartItems}>{items}</span>
          </div>
        </div>
      </header>
      {props.viewChecker > 550 && (
        <SecondBelt categoriesHandler={props.categoriesHandler}></SecondBelt>
      )}
    </>
  )
}

export default NavigationBelt
