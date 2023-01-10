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
        <h1>logo</h1>
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
                src={`data:image/jpeg;base64,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`}
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
      <SecondBelt categoriesHandler={props.categoriesHandler}></SecondBelt>
    </>
  )
}

export default NavigationBelt
