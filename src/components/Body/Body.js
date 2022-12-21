import React from 'react'
import FiltersComponent from '../../Filters/FiltersComponent'
import Products from '../products/Products'
import classes from './Body.module.css'
function Body() {
  return (
    <div className={classes.wrapper}>
      <FiltersComponent></FiltersComponent>
      <Products></Products>
    </div>
  )
}

export default Body
