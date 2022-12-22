import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAction } from '../../store/filter'
import classes from './ClearAllFilters.module.css'
function ClearAllFilters() {
  const dispatch = useDispatch()
  const clearAllHandler = () => {
    dispatch(filterAction.clear())
  }
  return (
    <div className={classes.wrapper} onClick={clearAllHandler}>
      <p>Clear All Filters</p>
    </div>
  )
}

export default ClearAllFilters
