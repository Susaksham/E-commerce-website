import React, { useRef } from 'react'
import classes from './NavigationBelt.module.css'
import CartIcon from '../../UI/CartIcon'
import Person from '../../UI/Person'
import SearchIcon from '../../UI/SearchIcon'
import SecondBelt from './SecondBelt'
function NavigationBelt(props) {
  const searchRef = useRef('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
  }
  console.log(props.onCartHandler)
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
          ></input>
          <button className={classes.submit} type="submit">
            <SearchIcon color="white" size="24px"></SearchIcon>
            Search
          </button>
        </form>
        <div className={classes.icons_container}>
          <div className={classes.cart}>
            <Person></Person>
          </div>
          <div className={classes.cart}>
            <CartIcon onClick={props.onCartHandler}></CartIcon>
          </div>
        </div>
      </header>
      <SecondBelt></SecondBelt>
    </>
  )
}

export default NavigationBelt
